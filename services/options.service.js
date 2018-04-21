
const finance = require('finance');
const Option = require('../models/option.js');


module.exports.getOptionData = function (option) {

    const opts = {
        symbol: option.getSymbol(),
        expirationDate: option.getExpiration(),
        stockPrice: option.getStockPrice()
    }

    console.log(opts.stockPrice);
    console.log(opts.symbol);
    /*
    finance.optionchain.getOptionChainFromYahoo(opts, function (err, quotes) {
        console.log(option);
        console.log(quotes);
        //findClosestMoney(option, quotes);
    });
    */
}


//formats and prints key primary data this will later be used to calculate Vega
let printKeyData = function (stock) {
    console.log(`Institutional investors:  ${stock.heldPercentInstitutions.fmt}`);
    console.log(`Shares short percent of float:  ${stock.shortRatio.fmt}`);
    console.log(`Beta: ${stock.beta.raw}`);
    console.log('--------------');
}



let findClosestMoney = function (option, quotes) {
    //prints the closests in the money call
    quotes.calls.forEach((call) => {
        if (call.strike == option.getStockPrice()) {
            console.log(`Call  : ${call.strike}`);
            console.log(`Last Price ${call.lastPrice}`);
            console.log(`Implied Volatility: ${call.impliedVolatility}`);
        }
    });
    console.log();
    //prints the closest in the money put
    quotes.puts.forEach((put) => {
        if (put.strike == option.getStockPrice()) {
            console.log(`Put  : ${put.strike}`);
            console.log(`Last Price ${put.lastPrice}`);
            console.log(`Implied Volatility: ${put.impliedVolatility}`);
        }
    });
}



