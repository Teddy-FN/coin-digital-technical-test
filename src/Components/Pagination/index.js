import React from "react";
import "./style.css";

const Pagination = ({ postPerPage, totalPost, paginate }) => {
  const pageNumber = [];
  for (let i = 1; i <= postPerPage; i++) {
    pageNumber.push(i);
  }
  return (
    <ul className="pagination-wrapper">
      {pageNumber.map((number, idx) => {
        return (
          <li key={idx}>
            <button onClick={() => paginate(number)} className="pagination-btn">
              {number}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;
