const stockService = require('../services/stocks.service');
const Stock = require('../models/stock');
const rma = require('../scheduler/rma');


module.exports.stockPrice = async function(ticker = 'AAPL'){
    let stock = new Stock(ticker);
    await stock.refreshPrice();
    rma.nodeSchedule(stock, 3);
}

module.exports.testNews = async function(ticker = 'AAPL'){
    let stock = new Stock(ticker);
    await stock.refreshNews();
    console.log(JSON.stringify(stock.getNews()));
}
