import React from 'react';
// import Puzzle1 from './Puzzles/Puzzle1';
import '../App.css';

const Pagination = ({paginate}) => {
  const pageNumbers = [];

  for (let i = 0; i <= 5; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="paginate">
        <p className="para-lesson">Lesson1</p>
    
        <p className="para-left">Warmup Puzzles</p>
      <ul className='pagination'>
      {/* <i class="fa fa-angle-left fa-2x" aria-hidden="true"  ></i> &nbsp;&nbsp; */}
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
              
            <a onClick={() => paginate(number)} href='!#' className='page-link'>

              <span></span>
            </a>
          </li>
        ))}
        {/* &nbsp;&nbsp;<i class="fa fa-angle-right fa-2x"  aria-hidden="true" ></i>  */}
      </ul>
      
    </nav>
  );
};

export default Pagination;