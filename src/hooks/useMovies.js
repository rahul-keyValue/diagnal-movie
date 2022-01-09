import {
    useSelector,
    useDispatch
} from 'react-redux';

import {
    SET_MOVIES
} from '../types/movie';



const useMovies = () => {


    const fullMovies = useSelector(state => state.App.movies);
    const dispatch = useDispatch();

    const getMovies = (query = "", offset = 0, skip = 20) => {
        if (!query) {
            const data = fullMovies.slice(offset, skip);
            dispatch({
                type: SET_MOVIES,
                data
            });
        } else {
            const data = fullMovies.filter((movie) => movie.name.toLowerCase().includes(query)).slice(offset, 20);
            dispatch({
                type: SET_MOVIES,
                data
            });
        }
    }



    return {
        getMovies,
    }
};

export default useMovies;