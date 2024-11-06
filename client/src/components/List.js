import React from "react";
import Stock from "./Stock";

const StockList = ({ stocks, updateQuantity, deleteStock }) => {
  const headers = [
    "Stock",
    "Price",
    "Quantity",
    "Equity",
    "Dividend",
    "Income",
  ];

  const mapHeaders = headers.map((item) => {
    return <div>{item}</div>;
  });

  const mappedStocks = stocks.reverse().map((stock) => {
    return (
      <Stock
        key={stock.symbol}
        stock={stock}
        updateQuantity={updateQuantity}
        deleteStock={deleteStock}
      />
    );
  });

  return (
    <div className="pt-3 bg-white shadow-card p-3 rounded">
      <div className="grid grid-cols-7 gap-4 border-b border-white text-center">
        {mapHeaders}
      </div>
      <div>{mappedStocks}</div>
    </div>
  );
};

export default StockList;
