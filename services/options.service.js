
const finance = require('finance');
const Option = require('../models/option.js');


//extract option data from Yahoo finance
module.exports.getOptionData = function (option) {
    const opts = {
        expirationDate: option.getExpiration(),
        symbol: option.getSymbol()
    }
    finance.optionchain.getOptionChainFromYahoo(opts, function (err, quotes) {
        const op = findClosestMoney(option, quotes);
        option.printSummary();
        return option;
    });   
}

function findClosestMoney(option, quotes) {
    quotes.calls.forEach((call) => {
        if (call.strike == option.getStockPrice()) {
            option.setCall(call.strike, call.lastPrice, call.impliedVolatility);
        }
    });
    quotes.puts.forEach((put) => {
        if (put.strike == option.getStockPrice()) {
            option.setPut(put.strike, put.lastPrice, put.impliedVolatility);
        }
    });

}



