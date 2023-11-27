import React from 'react';
import {
  Paginate,
  NextLabelElement,
  PreviousLabelElement,
} from './Pagination.styled';

export const Pagination = ({ pageCount, setCurrentPage }) => {
  const handlePageClick = event => {
    setCurrentPage(event.selected + 1);
  };

  return (
    <>
      <Paginate
        breakLabel="..."
        nextLabel={<NextLabelElement />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel={<PreviousLabelElement />}
        renderOnZeroPageCount={null}
        pageLinkClassName="paginationLink"
        activeClassName="active"
        activeLinkClassName="activeLink"
        previousClassName="paginationItemArrow"
        nextClassName="paginationItemArrow"
        previousLinkClassName="paginationLinkArrow"
        nextLinkClassName="paginationLinkArrow"
        disabledClassName="disabled"
        disabledLinkClassName="disabledLink"
      />
    </>
  );
};
