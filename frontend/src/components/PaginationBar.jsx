import React from 'react'

function PaginationBar({ currentPage, totalPages, onPageChange }) {
  return (
    <div>
        <button className='w-10 h-10 rounded-md' onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
            &laquo;
        </button>
        <span>{currentPage} of {totalPages}</span>
        <button className='w-10 h-10 rounded-md' onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            &raquo;
        </button>
    </div>
  )
}

export default PaginationBar
