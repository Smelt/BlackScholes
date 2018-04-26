//"use strict";
const feedQuandl = require('d3fc-financial-feed');
const yahoo = require('yahoo-stocks');
const optionService = require('./services/options.service');
const stockService = require('./services/stocks.service');
const Stock = require('./models/stock');
const Option = require('./models/option');

const finance = require('finance');

run('aapl', 165, '2018-05-11');
/*
setTimeout(function(){
  console.log();
  run('amzn', 1460, '2018-05-11');
}, 1200 );

*/
async function run(ticker, price, date){
  console.log("Run");
  let stock = new Stock(ticker);
  stock.setPrice(price);
  stock = await stockService.getStockData(stock);
  let option = new Option(stock.getSymbol(), stock.getPrice(), date);
  option =  await optionService.getOptionData(option);
  console.log(option);
  option.printSummary();
}




