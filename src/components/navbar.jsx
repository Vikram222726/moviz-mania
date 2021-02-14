import React from 'react';
import {Link} from 'react-router-dom';
import "../App.css";

const NavBar = ({handleSearch,searchMovies}) =>{
    return(
        <div className="navbar">
            <div className="logo">
                <div className="fname">MOVIES</div>
                <div className="lname">MANIA</div>
            </div>
            <div className="buttons">
                <Link className="home cmn" to="/">Home</Link>
                <Link className="moviesList cmn" to="/movieList">Movies List</Link>
            </div>
            <input type="text" className="text-box" placeholder="search" onChange={handleSearch} 
                onKeyPress={searchMovies}
            />
        </div>
    );
};

export default NavBar;