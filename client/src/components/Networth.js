const Networth = ({ networth, passiveIncome }) => {
  return (
    <div className="assets">
      <h2>Networth: {networth}</h2>
      <h2>Yearly dividend: {passiveIncome}</h2>
      <h2>Paycheck: {(passiveIncome / 26).toFixed(2)}</h2>
      <h2>Hourly: {(passiveIncome / 2080).toFixed(2)}</h2>
    </div>
  );
};

export default Networth;
