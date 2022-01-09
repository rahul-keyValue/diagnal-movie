
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { SET_SEARCH_KEYWORD } from '../../types/movie';

import './Navbar.css'

const Navbar = () => {

    const [searchKeyword, setSearchKeyword] = useState("");
    const dispatch = useDispatch();

    const searchOnEnter = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            dispatch({ type: SET_SEARCH_KEYWORD, data: searchKeyword })
        }
    }

    return (
        <div className="navbarContainer">
            <div className="d-flex  v-center search-wrapper">
                <img src={`${process.env.PUBLIC_URL}/assets/Back.png`} alt="back" className="backButton" />
                <input type="text" onChange={(e) => setSearchKeyword(e.target.value)} placeholder="Search for Movies" onKeyUp={(e) => searchOnEnter(e)} />
            </div>
            <img src={`${process.env.PUBLIC_URL}/assets/search.png`} alt="back" className="backButton" onClick={() => dispatch({ type: SET_SEARCH_KEYWORD, data: searchKeyword })} />
        </div>

    );
}


export default Navbar;


