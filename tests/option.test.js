const Stock = require('../models/stock');
const Option = require('../models/option');

const optionService = require('../services/options.service');

module.exports.testOptionData = async function (ticker, date = '2018-05-18') {
    
    if (ticker) {
        let stock = new Stock(ticker);
        await stock.refreshPrice();
        let option = new Option(stock.getSymbol(), stock.getPrice(), date);
        await option.refreshPrice()
        option.printSummary();
    }
    else {
        const monthlyDate = '2018-05-18';
        let apple = new Stock('aapl');
        await apple.refreshPrice();
        let appleOption = new Option(apple.getSymbol(), apple.getPrice(), monthlyDate);
        await appleOption.refreshPrice();
        appleOption.printSummary();
    }
}