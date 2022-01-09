import Immutable from 'seamless-immutable';
import { SET_MOVIES, SET_SEARCH_KEYWORD, RESET_MOVIES } from "../types/movie";

const initialState = Immutable({
    movieList: [],
    searchKeyword: ''
});


const reducer = (state = initialState, action) => {
    switch(action.type){
        case SET_MOVIES: {
            const movies = state.movieList.length > 0 ? state.movieList.concat(action.data) : action.data
            return state.merge({ movieList: movies})
        }
        case SET_SEARCH_KEYWORD: {
            return state.merge({ searchKeyword: action.data})
        }
        case RESET_MOVIES: {
            return state.merge({ movieList: []})
        }
     default: return state;
    }
}

export default reducer;
