import React from "react";

const Stock = ({ stock, updateQuantity, deleteStock }) => {
  return (
    <div
      key={stock.symbol}
      className="grid grid-cols-7 my-3 gap-4 border-b border-[#ggg] py-2.5 text-center"
    >
      <div className="flex items-center justify-center stock-ticker uppercase">
        {stock.symbol}
      </div>
      <div className="flex items-center justify-center stock-price">
        {stock.price}
      </div>
      <input
        type="number"
        className="flex items-center justify-center text-black border-black border text-center bg-slate-200"
        onChange={(e) => {
          updateQuantity(e.target.value, stock.symbol);
        }}
        value={stock.quantity}
      />
      <div className="flex items-center justify-center stock-equaity">
        {(stock.price * stock.quantity).toFixed(2)}
      </div>
      <div className="flex items-center justify-center stock-dividend">
        {stock.dividend}%
      </div>
      <div className="flex items-center justify-center stock-passive-income">
        {(stock.price * (stock.dividend / 100) * stock.quantity).toFixed(2)}
      </div>
      <div className="flex items-center justify-center">
        <button
          className="bg-red-600 py-1 px-3 rounded text-white"
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
