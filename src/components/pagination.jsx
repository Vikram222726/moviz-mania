import React from 'react';
import _ from "lodash";

const Pagination = ({itemsCount, pageSize, onPageChange, currentPage}) =>{
    const pagesCount = itemsCount/pageSize;
    const pages = _.range(1,pagesCount+1);
    console.log(currentPage);
    return <nav>
        <ul className="pagination paginates">
            {pages.map(page => (<li className={page === currentPage ? "page-item active" : "page-item"} key={page}><a onClick={() => onPageChange(page)} className="page-link">{page}</a></li>))}
        </ul>
    </nav>
}

export default Pagination;