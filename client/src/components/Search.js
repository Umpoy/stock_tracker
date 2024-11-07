import React from "react";

const Search = ({ ticker, setTicker, handleOnSubmit, searchText }) => {
  return (
    <div className="ticker-search">
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          value={ticker}
          className="text-black"
          onChange={(e) => {
            setTicker(e.target.value);
          }}
        />
      </form>
      <p className={searchText.style}>{searchText.text}</p>
    </div>
  );
};

export default Search;
