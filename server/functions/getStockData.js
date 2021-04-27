const fetch = require('node-fetch');
const cheerio = require('cheerio');

module.exports = async function (symbol) {
    const res = await fetch(`https://www.marketwatch.com/investing/stock/${symbol}`);
    const text = await res.text();
    const $ = cheerio.load(text);
    const findStockPrice = $('.intraday__price .value').text();
    const findDividend = $('.list--kv li small:contains("Yield")').next('.primary').text();

    const data = {
        symbol: symbol,
        price: Number(findStockPrice),
        dividend: Number(findDividend)
    }
    return await data
};
