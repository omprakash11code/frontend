import React from "react";

function SearchBar({ onSearch }) {
    const handleInputChange = (event) => {
        onSearch(event.target.value);
    };

    return (
        <input
            type="text"
            placeholder="Search by Name or Skills"
            onChange={handleInputChange}
        />
    );
}

export default SearchBar;
