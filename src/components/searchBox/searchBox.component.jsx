import React from 'react';

import './searchBox.style.css';

const SearchBox = props => {
    return (
        <div className="search-box">
            <input 
                type="search" 
                placeholder={props.placeHolder} 
                onChange={props.onSearchChange} 
            />
        </div>
    )
};




export default SearchBox;
