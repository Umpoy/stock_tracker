import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import StockList from "./components/List";
import Networth from "./components/Networth";
import axios from "axios";

const App = () => {
  const [ticker, setTicker] = useState("");
  const [stocks, setStock] = useState(() => {
    const savedStocks = localStorage.getItem("stocks");
    return savedStocks ? JSON.parse(savedStocks) : [];
  });
  const [networth, setNetworth] = useState(0);
  const [passiveIncome, setPassiveIncome] = useState(0);
  const [result, setResults] = useState({});
  const [searchText, setSearchText] = useState({
    text: "Search stock by ticker symbol",
    style: "",
  });

  useEffect(() => {
    localStorage.setItem("stocks", JSON.stringify(stocks));
  }, [stocks]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const isStockExists = stocks.some(
      (stock) => stock.symbol === result.symbol
    );

    if (isStockExists) {
      setResults({});
      setSearchText({
        text: `${result.symbol} is already added. Please search again`,
        style: "animate-buzz",
      });
      return;
    }
    if (!result.price) return;
    result.quantity = 1;
    const updatedStocks = [result, ...stocks];
    setStock(updatedStocks);
    setTicker("");
    setResults({});
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
    const updatedList = stocks.filter((stock) => stock.symbol !== stockTicker);
    setStock(updatedList);
  };

  useEffect(() => {
    if (ticker.length === 0) {
      setSearchText({ text: "Search stock by ticker symbol" });
    } else {
      setSearchText({ text: "Loading..." });
    }

    const searchStock = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_NODE_API}/getStock/${ticker}`
        );
        setResults(data);
        if (data.price > 0) {
          setSearchText({
            text: `${data.symbol} is at ${data.price} with a ${data.dividend}% dividend`,
          });
        } else {
          setSearchText({
            text: "Sorry, that stock either doesn't exist or doesn't have a dividend.",
          });
        }
      } catch {
        setSearchText({
          text: "Sorry, that stock either doesn't exist or doesn't have a dividend.",
        });
      }
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
    <div className="app p-4 max-w-[1200px] mx-auto">
      <Search
        ticker={ticker}
        setTicker={setTicker}
        handleOnSubmit={handleOnSubmit}
        searchText={searchText}
      />
      <Networth networth={networth} passiveIncome={passiveIncome} />
      <StockList
        stocks={stocks}
        updateQuantity={updateStockQuantity}
        deleteStock={deleteStock}
      />
    </div>
  );
};

export default App;
