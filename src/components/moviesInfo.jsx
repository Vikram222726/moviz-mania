import React from 'react';
import MovieDiv from './movieDiv';
import { DefaultMovie } from './bydefaultMovie';

const MoviesInfo = ({movies}) => {
    let newMovies;
    if(movies === undefined){
        newMovies = DefaultMovie;
    }else{
        newMovies = movies;
    }
    return(
        <div className="movie-container">
            {newMovies.map(movie => (
                <MovieDiv key={movie.imdbID} movie={movie}/>
            ))}
        </div>
    )
};

export default MoviesInfo;