import React from "react";
import "./SearchBox.css";

export default function SearchBox({ searchText, setSearchText }) {
  // get a debounce timeout function that sets the search

  const debounce = (callback, delay = 1000) => {
    // returns a function that returns a callback function as a property that will invoke after a set of time defaults to 1s
    let timeout;
    return (...arg) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        return callback(...arg);
      }, delay);
    };
  };

  const updateSearchValue = debounce((text) => {
    return setSearchText(text);
  });

  return (
    <>
      <div className="Search-container">
        <input
          placeholder="Search..."
          type="text"
          className="input"
          onChange={(e) => updateSearchValue(e.target.value)}
        />
      </div>
    </>
  );
}
