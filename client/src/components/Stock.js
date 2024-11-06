import React from "react";

const Stock = ({ stock, updateQuantity, deleteStock }) => {
  return (
    <>
      <tr key={stock.symbol}>
        <td className="stock-ticker">{stock.symbol}</td>
        <td className="stock-price">{stock.price}</td>
        <input
          type="number"
          onChange={(e) => {
            updateQuantity(e.target.value, stock.symbol);
          }}
          value={stock.quantity}
        />
        <td className="stock-equaity">
          {(stock.price * stock.quantity).toFixed(2)}
        </td>
        <td className="stock-dividend">{stock.dividend}%</td>
        <td className="stock-passive-income">
          {(stock.price * (stock.dividend / 100)).toFixed(2) * stock.quantity}
        </td>
        <td>
          <button
            onClick={() => {
              deleteStock(stock.symbol);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default Stock;
