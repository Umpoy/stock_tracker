const getStock = require("../functions/getStockData.js");

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send("Welcome to my stock API");
    });

    app.get('/getStock/:tickerSymbol', async function (req, res) {
        const ticker = req.params.tickerSymbol;
        res.send(await getStock(ticker));
    });
}