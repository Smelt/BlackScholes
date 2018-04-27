//"use strict";
const feedQuandl = require('d3fc-financial-feed');
const yahoo = require('yahoo-stocks');
const optionService = require('./services/options.service');
const stockService = require('./services/stocks.service');
const cryptoService = require('./services/crypto.service');
const Stock = require('./models/stock');
const Option = require('./models/option');
const Crypto = require('./models/crypto');
const finance = require('finance');



//run('aapl', 165, '2018-05-11');
//stockService.getCurrData('aapl');
testCrypto('BTC');

//console.log(am);
async function testCrypto(symbol){
  let bitcoin = new Crypto(symbol);
  await bitcoin.refreshData();
  console.log(bitcoin.getPrice());
}




async function run(ticker, price, date){
  let stock = new Stock(ticker);
  stock.setPrice(price);
  await stockService.getStockData(stock);
  console.log(JSON.stringify(stock));
  let option = new Option(stock.getSymbol(), stock.getPrice(), date);
  option =  await optionService.getOptionData(option);
  console.log(option);
  option.printSummary();
}




