import React from "react";
import "../App.css";

const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <div className="searchbar">
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search tasks..."
    />
  </div>
);

export default SearchBar;
