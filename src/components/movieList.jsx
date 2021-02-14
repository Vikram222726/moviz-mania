import React, {useState} from 'react';
import "../App.css";
import Pagination from './pagination';
import { DefaultMovie } from './bydefaultMovie';
import { Paginate } from './paginate';
import _ from 'lodash';

const MovieList = ({movies}) => {
    let newMovies;
    const [currentPage, setCurrentPage] = useState(1);
    const [sortColm, setSortColm] = useState({path: 'Title', order: 'desc'});
    const handleSort = (path) => {
        if(sortColm.path === path){
            if(sortColm.order === 'desc'){
                setSortColm({path, order: 'asc'});
            }else{
                setSortColm({path, order: 'desc'});
            }
        }else{
            setSortColm({path, order: 'desc'});
        }
    };

    if(movies === undefined){
        newMovies = DefaultMovie;
    }else{
        newMovies = movies;
    }
    const sortMovies = _.orderBy(newMovies, [sortColm.path], [sortColm.order]);
    const nMovies = Paginate(sortMovies, currentPage, 4);
    
    const onPageChange = (page) =>{
        setCurrentPage(page);
    };
    
    return(
        <div>
            <div className="listHeading">MOVIES LIST</div>
            <table className="table">
                <thead className="headers">
                    <tr>
                        <th onClick={() => handleSort('Title')}>Movie Name</th>
                        <th onClick={() => handleSort('Year')}>Year of release</th>
                        <th onClick={() => handleSort('Type')}>Type</th>
                        <th onClick={() => handleSort('imdbID')}>Id</th>
                    </tr>
                </thead>
                <tbody className="bodies">
                    {nMovies.map(movie => <tr key={movie.imdbID}>
                        <td>{movie.Title}</td>
                        <td>{movie.Year}</td>
                        <td>{movie.Type}</td>
                        <td>{movie.imdbID}</td>
                    </tr>)}
                </tbody>
            </table>
            <Pagination itemsCount={newMovies.length} pageSize={4} onPageChange={onPageChange} currentPage={currentPage}/>
        </div>
    )
}

export default MovieList;