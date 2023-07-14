import './Pagination.css'
import React from 'react';



const Pagination = ({ currentPage, totalPages, prePage, nextPage, changePage }) => {
  const numbers = [...Array(totalPages).keys()].slice(1);

  return (
    <>
  

    <ul className='pagination'>
      <li className='page-item'>
        <a href='#' className='page-link' onClick={prePage}>
          Prev
        </a>
      </li>
      {numbers.map((n, i) => (
        <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
          <a href='#' className='page-item' onClick={() => changePage(n)}>
            {n}
          </a>
        </li>
      ))}
      <li className='page-item'>
        <a href="#" className='page-link' onClick={nextPage}>
          Next
        </a>
      </li>
    </ul>
    </>
  );
};

export default Pagination;
