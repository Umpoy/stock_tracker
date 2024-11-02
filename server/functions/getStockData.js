const fetch = require("node-fetch");
const cheerio = require("cheerio");

module.exports = async function (symbol) {
  const res = await fetch(
    `https://www.google.com/finance/quote/${symbol}:NASDAQ?hl=en`
  );
  const text = await res.text();
  const $ = cheerio.load(text);
  const findStockPrice = $(".YMlKec.fxKbKc")
    .first()
    .text()
    .replace(/[$,]/g, "")
    .trim();
  const findDividend = $(".gyFHrc")
    .filter((i, el) => {
      return $(el).find(".mfs7Fc").text().trim() === "Dividend yield";
    })
    .find(".P6K39c")
    .text()
    .replace(/[%]/g, "")
    .trim();

  const data = {
    symbol: symbol,
    price: Number(findStockPrice),
    dividend: Number(findDividend),
  };
  return await data;
};
