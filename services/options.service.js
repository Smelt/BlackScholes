
const finance = require('finance');
const Option = require('../models/option.js');


//extract option data from Yahoo finance
module.exports.getOptionData = async function (option) {
    const opts = {
        expirationDate: option.getExpiration(),
        symbol: option.getSymbol()
    }
    await finance.optionchain.getOptionChainFromYahoo(opts, function (err, quotes) {
       option = findClosestMoney(option, quotes); 
        //console.log(quotes);
        console.log(option);
        return option;
    });

}

async function findClosestMoney(option, quotes) {
   // console.log(quotes);
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
    return option;
}



