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
const StockTest = require('./tests/stock.test');
const OptionTest = require('./tests/option.test');
const CryptoTest = require('./tests/crypto.test');


async function runTest() {
  OptionTest.testOptionData('IQ');
  OptionTest.testOptionData('NFLX');
  OptionTest.testOptionData('BABA');
 // StockTest.testNews();
 // StockTest.stockPrice();
}
//OptionTest.testOptionData('IQ');
//runTest();

CryptoTest.rmaTest();







//console.log(am);
async function testCrypto(symbol) {
  let bitcoin = new Crypto(symbol);
  await bitcoin.refreshData();
  console.log(bitcoin.getPrice());
}






