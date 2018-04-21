//"use strict";
const feedQuandl = require('d3fc-financial-feed');
const yahoo = require('yahoo-stocks');
const optionService = require('./services/options.service');
const stockService = require('./services/stocks.service');
const Stock = require('./models/stock');
const Option = require('./models/option');



/*
const appleStock = new Stock('AAPL');
appleStock.setPrice(165);

stockService.getStockData(appleStock);
const appleOption = new Option(appleStock.getSymbol(), appleStock.getPrice(), '2018-05-11');
const full = optionService.getOptionData(appleOption);
*/

run('aapl', 165, '2018-05-11');

setTimeout(function(){
  console.log();
  run('fb', 165, '2018-05-11');
}, 1200 );


function run(ticker, price, date){
  let stock = new Stock(ticker);
  stock.setPrice(price);
  stockService.getStockData(stock);
  let option = new Option(stock.getSymbol(), stock.getPrice(), date);
  option = optionService.getOptionData(option);
}




