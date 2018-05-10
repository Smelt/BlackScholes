
const finance = require('finance');
const Option = require('../models/option.js');


//extract option data from Yahoo finance
module.exports.getOptionData = async function (option) {
    const opts = {
        expirationDate: option.getExpiration(),
        symbol: option.getSymbol()
    }
    
    return new Promise(function(resolve,reject){        
    finance.optionchain.getOptionChainFromYahoo(opts, function (err, quotes) {
       option = findClosestMoney(option, quotes); 
        resolve(option);
    });
})
}

async function findClosestMoney(option, quotes) {
    
   // console.log(quotes);
   const operatedCalls = quotes.calls.map( price => Math.abs(price.strike - option.getStockPrice() ));
   const callIndex = operatedCalls.reduce((min, x, i, arr) => x < operatedCalls[min] ? i : min, 0);

   const operatedPuts = quotes.puts.map( price => Math.abs(price.strike - option.getStockPrice() ));
   const putIndex = operatedPuts.reduce((min, x, i, arr) => x < operatedPuts[min] ? i : min, 0);
   console.log(quotes.calls[callIndex].strike);
    console.log(quotes.puts[putIndex].strike);
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



