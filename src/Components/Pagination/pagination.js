import React, { useState } from 'react';
import DatePicker from 'react-date-picker';

function Pagination({ MorePosts }) {

    return (
        <div>
            <button className="btn btn-primary" onClick={MorePosts}>Show More</button>
        </div>
    );
}
export default Pagination;