import React from "react";

const SearchBar = ({ onSearch }) => {
  return (
    <div className="my-4">
      <input
        type="text"
        placeholder="Search cars..."
        className="border rounded p-2 w-full"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
