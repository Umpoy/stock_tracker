import React from "react";
import Stock from "./Stock";

const StockList = ({ stocks, updateQuantity, deleteStock }) => {
  const headers = [
    "Stock",
    "Price",
    "quantity",
    "Equaity",
    "Dividend",
    "Pasive Income",
  ];

  const mapHeaders = headers.map((item) => {
    return <th style={{ width: 100 / 6 + "%" }}>{item}</th>;
  });

  const mappedStocks = stocks.map((stock) => {
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
    <div className="stock-list">
      <table style={{ width: "100%" }}>
        <thead>
          <tr>{mapHeaders}</tr>
        </thead>
        <tbody>{mappedStocks}</tbody>
      </table>
    </div>
  );
};

export default StockList;
