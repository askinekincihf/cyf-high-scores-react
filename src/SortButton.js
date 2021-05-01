import React from 'react';

const SortButton = ({ handleSort, sortBy }) => {
    return (
        <div className='d-grid gap-2 col-4 mx-auto mt-3'>
            <button className='btn btn-primary' onClick={handleSort}>
                Sort Scores{' '}
                {sortBy === 'ascending'
                    ? 'UP'
                    : sortBy === 'descending'
                        ? 'DOWN'
                        : null}
            </button>
        </div>
    );
};

export default SortButton;