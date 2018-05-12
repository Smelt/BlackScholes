const Stock = require('../models/stock');
const Option = require('../models/option');

const optionService = require('../services/options.service');

module.exports.testOptionData = async function (ticker = 'AAPL', date = '2018-05-18') {
        let stock = new Stock(ticker);
        await stock.refreshPrice();
        let option = new Option(stock.getSymbol(), stock.getPrice(), date);
        await option.refreshPrice()
        option.printSummary();  
}