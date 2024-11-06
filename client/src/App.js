import React, { useState, useEffect } from "react";
import StockList from "./components/List";
import axios from "axios";

const App = () => {
  const [ticker, setTicker] = useState("");
  const [stocks, setStock] = useState([]);
  const [networth, setNetworth] = useState(0);
  const [passiveIncome, setPassiveIncome] = useState(0);
  const [result, setResults] = useState({});

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!result.price) return;
    result.quantity = 1;
    setStock([result, ...stocks]);
    setTicker("");
  };
  const showStockInfo = () => {
    if (ticker.length === 0) {
      return <p>Search stock by ticker symbol</p>;
    }
    if (result.price > 0 && ticker) {
      return (
        <p>
          {result.symbol} is at {result.price} with a {result.dividend}%
          dividend
        </p>
      );
    } else {
      return (
        <p>Sorry that stock either doesn't exist or doesn't have a dividend</p>
      );
    }
  };

  const updateStockQuantity = (e, stockTicker) => {
    const foundStock = stocks.find(({ symbol }) => symbol === stockTicker);
    foundStock.quantity = e;
    const index = stocks.findIndex(({ symbol }) => symbol === stockTicker);
    const newState = [...stocks];
    newState[index] = foundStock;
    setStock(newState);
  };

  const deleteStock = (stockTicker) => {
    console.log(stocks);
    const updatedList = stocks.filter((stock) => stock.symbol !== stockTicker);
    setStock(updatedList);
  };

  useEffect(() => {
    const searchStock = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/getStock/${ticker}`
      );
      setResults(data);
    };
    const debounce = setTimeout(() => {
      if (ticker) {
        searchStock();
      }
    }, 1000);
    return () => {
      clearTimeout(debounce);
    };
  }, [ticker]);

  useEffect(() => {
    let total = 0;
    let payout = 0;

    stocks.forEach((item) => {
      total += item.quantity * item.price;
      payout += (item.price * (item.dividend / 100)).toFixed(2) * item.quantity;
    });
    setNetworth(total);
    setPassiveIncome(payout);
  }, [stocks]);

  return (
    <div div className="app">
      <div className="ticker-search">
        <form onSubmit={handleOnSubmit}>
          <input
            type="text"
            value={ticker}
            onChange={(e) => {
              setTicker(e.target.value);
            }}
          />
        </form>
        {showStockInfo()}
      </div>
      <div className="assets">
        <h2>Networth: {networth}</h2>
        <h2>Yearly dividend: {passiveIncome}</h2>
      </div>
      <StockList
        stocks={stocks}
        updateQuantity={updateStockQuantity}
        deleteStock={deleteStock}
      />
    </div>
  );
};
export default App;
