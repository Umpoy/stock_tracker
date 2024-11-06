const fetch = require("node-fetch");
const cheerio = require("cheerio");

module.exports = async function (symbol) {
  const res = await fetch(`https://finance.yahoo.com/quote/${symbol}/`);
  const text = await res.text();
  const $ = cheerio.load(text);
  const stockPrice = $(".livePrice span").text();
  let dividend = 0;
  const findDividend = $("span[title='Forward Dividend & Yield']")
    .next()
    .text()
    .match(/\((\d+\.\d+)%\)/);
  if (findDividend) {
    dividend = findDividend[1];
  } else {
    const secondSearch = $("span[title='Yield']")
      .next()
      .text()
      .replace("%", "");
    if (secondSearch) {
      dividend = secondSearch;
    }
  }

  const data = {
    symbol: symbol,
    price: Number(stockPrice),
    dividend: Number(dividend),
  };
  return await data;
};
