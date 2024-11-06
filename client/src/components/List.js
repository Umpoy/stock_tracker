import React from "react";

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

  const mappedStocks = stocks.map((item) => {
    return (
      <tr key={item.symbol}>
        <td className="stock-ticker">{item.symbol}</td>
        <td className="stock-price">{item.price}</td>
        <input
          type="number"
          onChange={(e) => {
            updateQuantity(e.target.value, item.symbol);
          }}
          value={item.quantity}
        />
        <td className="stock-equaity">
          {(item.price * item.quantity).toFixed(2)}
        </td>
        <td className="stock-dividend">{item.dividend}%</td>
        <td className="stock-passive-income">
          {(item.price * (item.dividend / 100)).toFixed(2) * item.quantity}
        </td>
        <td>
          <button
            onClick={() => {
              deleteStock(item.symbol);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
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
