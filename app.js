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



//run('aapl', 165, '2018-05-11');
//stockService.getCurrData('aapl');
//testCrypto('BTC');





//console.log(am);
async function testCrypto(symbol){
  let bitcoin = new Crypto(symbol);
  await bitcoin.refreshData();
  console.log(bitcoin.getPrice());
}






