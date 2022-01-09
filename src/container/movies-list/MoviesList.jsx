import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';

import MovieCard from '../../components/movie-card/MovieCard';
import useMovies from '../../hooks/useMovies';
import { RESET_MOVIES } from '../../types/movie';
import './MovieList.css'

const MoviesList = () => {

    const movies = useSelector(state => state.Movies.movieList);
    const searchKeyword = useSelector(state => state.Movies.searchKeyword);

    const dispatch = useDispatch();

    const [page, setPage] = useState(1);

    const { getMovies } = useMovies();

    const fetchMoreData = () => {
        getMovies(searchKeyword, movies.length, movies.length+20)
    }

    useEffect(() => {
        if(movies.length > 0) {
            dispatch({ type: RESET_MOVIES})
        }
        getMovies(searchKeyword, 0, 20);
    }, [searchKeyword]);


    return (
        <div className="full-width contentWrapper" id="scrollableDiv">
            <InfiniteScroll
                dataLength={movies.length}
                next={fetchMoreData}
                hasMore={true}
                scrollableTarget="scrollableDiv"
            >
                        <div className="full-content d-flex movieListContainer f-wrap" >

                {
                    movies?.map((movie, index) => (
                        <MovieCard posterPath={movie['poster-image']} title={movie.name} key={index}/>
                    ))
                }
                        </div>

            </InfiniteScroll>
            
            </div>

    )
};

export default MoviesList;
