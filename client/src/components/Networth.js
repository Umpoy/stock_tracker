import React from "react";
const Networth = ({ networth, passiveIncome }) => {
  return (
    <div className="assets grid grid-flow-col p-3 bg-white shadow-card rounded my-3">
      <h2>Networth: ${networth.toFixed(2)}</h2>
      <h2>Yearly dividend: ${passiveIncome.toFixed(2)}</h2>
      <h2>Paycheck: ${(passiveIncome / 26).toFixed(2)}</h2>
      <h2>Hourly: ${(passiveIncome / 2080).toFixed(2)}</h2>
    </div>
  );
};

export default Networth;
