const stockService = require('../services/stocks.service');
const Stock = require('../models/stock');
const rma = require('../scheduler/rma');


module.exports.stockPrice = async function(ticker){
    let stock = new Stock(ticker);
    await stock.refreshPrice();
    rma.nodeSchedule(stock, 3);
}
