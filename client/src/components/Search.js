import React, { useState } from "react";

const Search = ({ ticker, setTicker, handleOnSubmit, showStockInfo }) => {
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
      {showStockInfo()}
    </div>
  );
};

export default Search;
