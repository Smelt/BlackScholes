
const finance = require('finance');
const yahoo = require('yahoo-nasdaq');
const request = require('request');

module.exports.getStockData = async function(stock){
    return new Promise(function(resolve,reject){
   const stockParam = {
       symbol: stock.getSymbol()
   }
    finance.keystatistics.getKeyStatistics(stockParam, (err, data) => {
    stock.setHeldInstitutions(data.heldPercentInstitutions.raw);
    stock.setSharesShort(data.shortRatio.raw);
    stock.setBeta(data.beta.raw);
    resolve(stock);
   });
})
}

module.exports.getCurrData = async function(ticker){
    return new Promise(function(resolve, reject){
    const uri = `https://api.iextrading.com/1.0/stock/${ticker}/batch?`;
    request({
        qs: {
            'types': 'quote,news,chart'
        },
        uri: uri,
        method: 'GET'
    }, function (err, res, body) {
        if (err) {
            console.log(err);
            reject(err);
        }
        else {
            var results = JSON.parse(body);
            resolve(results);
        }
    });
});
}






