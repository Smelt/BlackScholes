//"use strict";
const feedQuandl = require('d3fc-financial-feed');
const yahoo = require('yahoo-stocks');
const optionService = require('./services/options.service');
const stockService = require('./services/stocks.service');
const Stock = require('./models/stock');
const Option = require('./models/option');

const finance = require('finance');

var parts ='2018-04-03'.split('-');
// Please pay attention to the month (parts[1]); JavaScript counts months from 0:
// January - 0, February - 1, etc.
var mydate = new Date(parts[0], parts[1] - 1, parts[2]); 

finance.quotes.getQuotes(['FB'], new Date('2018-04-23'), function(err,symbol,price){
  console.log(symbol);
  console.log(price);
});

/*
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
*/



