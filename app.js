//"use strict";
const feedQuandl = require('d3fc-financial-feed');
const yahoo = require('yahoo-stocks');
const optionService = require('./services/options.service');
const stockService = require('./services/stocks.service');
const Stock = require('./models/stock');
const Option = require('./models/option');


const appleStock = new Stock('AAPL');
appleStock.setPrice(165);

stockService.getStockData(appleStock);
const appleOption = new Option(appleStock.getSymbol(), appleStock.getPrice(), '2018-05-11');
const full = optionService.getOptionData(appleOption);






