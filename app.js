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
const rma = require('./scheduler/rma');
const stockTests = require('./tests/stock.test');


stockTests.stockPrice('aapl');
let apple = new Stock('aapl');

run();

async function run(){
await apple.refreshNews();
const news = apple.getNews();
news.forEach(element => {
  console.log(element.headline)
  console.log(element.summary);
  console.log(element.datetime);
  console.log();
});
}
//stockService.getQuoteNews(apple.getSymbol(), false, true);


let bitcoin = new Crypto('BTC');
let ethereum = new Crypto('ETH');
//rma.nodeSchedule(ethereum, 4);
//rma.nodeSchedule(bitcoin, 3);

//run('aapl', 165, '2018-05-11');
//stockService.getCurrData('aapl');
//testCrypto('BTC');





//console.log(am);
async function testCrypto(symbol){
  let bitcoin = new Crypto(symbol);
  await bitcoin.refreshData();
  console.log(bitcoin.getPrice());
}






