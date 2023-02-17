import React from 'react';
import Button from 'react-bootstrap/Button'
import './Pagination.css'

const Pages = ({prevPage, nextPage, pageBefore, pageAfter}) => {
    let disabledAfter, disabledBefore = false; 
    pageBefore ? disabledBefore = false : disabledBefore = true;
    pageAfter ? disabledAfter = false : disabledAfter = true;
    return(
        <div className='pagesBtn mt-3'>
        <Button onClick={prevPage} disabled={disabledBefore}>Prev</Button>
        <Button onClick={nextPage} disabled={disabledAfter}>Next</Button>
        </div>
    )
}

export { Pages }