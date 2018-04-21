
const feedQuandl = require('d3fc-financial-feed');
const yahoo = require('yahoo-stocks');
const finance = require('finance');


//where we specify the ticker/option date we want to examine
const opts = {
  symbol: 'AAPL',
  expiration: '2018-05-11'
}


finance.keystatistics.getKeyStatistics(opts, getOptionData);


function getOptionData(err, keyStats) {
  printKeyData(keyStats);
  finance.optionchain.getOptionChainFromYahoo(opts, function (err, quotes) {
    findClosestMoney(quotes);
  });
}

function findClosestMoney(quotes) {
  //this data will ideally be found from API
  const currPrice = 165;
  //prints the closests in the money call
  quotes.calls.forEach((call) => {
    if (call.strike == currPrice) {
      console.log(`Call  : ${call.strike}`);
      console.log(`Last Price ${call.lastPrice}`);
      console.log(`Implied Volatility: ${call.impliedVolatility}`);
    }
  });
  console.log();
  //prints the closest in the money put
  quotes.puts.forEach((put) => {
    if (put.strike == currPrice) {
      console.log(`Put  : ${put.strike}`);
      console.log(`Last Price ${put.lastPrice}`);
      console.log(`Implied Volatility: ${put.impliedVolatility}`);
    }
  });
}

//formats and prints key primary data this will later be used to calculate Vega
function printKeyData(stock) {
  console.log(`Institutional investors:  ${stock.heldPercentInstitutions.fmt}`);
  console.log(`Shares short percent of float:  ${stock.shortRatio.fmt}`);
  console.log(`Beta: ${stock.beta.raw}`);
  console.log('--------------');
}

//


