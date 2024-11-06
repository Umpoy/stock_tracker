import React from "react";

const Stock = ({ stock, updateQuantity, deleteStock }) => {
  return (
    <div key={stock.symbol} className="grid grid-cols-7 my-3 gap-4">
      <div className="stock-ticker uppercase">{stock.symbol}</div>
      <div className="stock-price">{stock.price}</div>
      <input
        type="number"
        className="text-black"
        onChange={(e) => {
          updateQuantity(e.target.value, stock.symbol);
        }}
        value={stock.quantity}
      />
      <div className="stock-equaity">
        {(stock.price * stock.quantity).toFixed(2)}
      </div>
      <div className="stock-dividend">{stock.dividend}%</div>
      <div className="stock-passive-income">
        {(stock.price * (stock.dividend / 100) * stock.quantity).toFixed(2)}
      </div>
      <div>
        <button
          className="border border-black py-1 px-3"
          onClick={() => {
            deleteStock(stock.symbol);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Stock;
