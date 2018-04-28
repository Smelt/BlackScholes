const stockService = require('../services/stocks.service');
const Stock = require('../models/stock');
const rma = require('../scheduler/rma');


module.exports.stockPrice = async function(ticker){
    let stock = new Stock(ticker);
    await stock.refreshPrice();
    rma.nodeSchedule(stock, 3);
    /*
    let option = new Option(stock.getSymbol(), stock.getPrice(), date);
    option =  await optionService.getOptionData(option);
    console.log(option);
    option.printSummary();
    */
  }

/*

module.exports.stockPrice = async function(ticker, price, date){
    let stock = new Stock(ticker);
    //await stockService.getStockData(stock);
    stock.refreshPrice();
    console.log(JSON.stringify(stock));
    
    let option = new Option(stock.getSymbol(), stock.getPrice(), date);
    option =  await optionService.getOptionData(option);
    console.log(option);
    option.printSummary();
    
}

*/