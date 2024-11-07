const getStock = require("../functions/getStockData.js");
const fs = require("fs");

module.exports = (app) => {
  app.get("/getStock/:tickerSymbol", async (req, res) => {
    const ticker = req.params.tickerSymbol;
    res.send(await getStock(ticker));
  });

  app.get("/getMyStockData", (req, res) => {
    let rawdata = fs.readFileSync(__dirname + "/data.json");
    let stocks = JSON.parse(rawdata);
    console.log(stocks);
  });
};
