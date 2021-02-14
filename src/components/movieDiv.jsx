import React from 'react';
import "../App.css"

const MovieDiv = ({movie}) => {
    let backGround = movie.Poster;
    if(movie.Poster === "N/A"){
        backGround="https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80";
    }
    return(
        <div className="movieDiv">
            <div style={{backgroundImage: "url(" + backGround + ")"}} className="imgs" />
            <div className="movie-info">
                <h5>{movie.Title}</h5>
                <span>{movie.Year}</span>
            </div>
        </div>
    )
};

export default MovieDiv;