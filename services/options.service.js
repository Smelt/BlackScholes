
const finance = require('finance');
const Option = require('../models/option.js');


//extract option data from Yahoo finance
module.exports.getOptionData = async function (option) {
    const opts = {
        expirationDate: option.getExpiration(),
        symbol: option.getSymbol()
    }
    return new Promise(function (resolve, reject) {
        finance.optionchain.getOptionChainFromYahoo(opts, function (err, quotes) {
            option = findClosestMoney(option, quotes);
            resolve(option);
        });
    })
}

async function findClosestMoney(option, quotes) {
    const operatedCalls = quotes.calls.map(price => Math.abs(price.strike - option.getStockPrice()));
    const callIndex = operatedCalls.reduce((min, x, i, arr) => x < operatedCalls[min] ? i : min, 0);
    const call = quotes.calls[callIndex];

    option.setCall(call.strike, call.lastPrice, call.impliedVolatility);

    const operatedPuts = quotes.puts.map(price => Math.abs(price.strike - option.getStockPrice()));
    const putIndex = operatedPuts.reduce((min, x, i, arr) => x < operatedPuts[min] ? i : min, 0);
    const put = quotes.puts[putIndex];

    option.setPut(put.strike, put.lastPrice, put.impliedVolatility);

    return option;
}



