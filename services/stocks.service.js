
const finance = require('finance');
const yahoo = require('yahoo-nasdaq');
const request = require('request');

module.exports.getStockData = async function (stock) {
    const stockParam = {
        symbol: stock.getSymbol()
    }
    const [inst, realTime] = await Promise.all([institutionalData(stockParam), getRealTimeData(stockParam.symbol)]);
    stock[inst] = inst;
    stock[realTime] = realTime;
    //console.log(realTime);
    return stock;
}

function institutionalData(stockParam) {
    return new Promise(function (resolve, reject) {
        finance.keystatistics.getKeyStatistics(stockParam, (err, data) => {
            const institution = {
                heldInstitutions: data.heldPercentInstitutions.raw,
                sharesShort: data.shortRatio.raw,
                beta: data.beta.raw
            }
            resolve(institution);
            /*
            stock.setHeldInstitutions(data.heldPercentInstitutions.raw);
            stock.setSharesShort(data.shortRatio.raw);
            stock.setBeta(data.beta.raw);
            resolve(stock);
           */

        })
    })
}

module.exports.getStockData = function(ticker, quote = false, news = false) {
    let types = '';
    if(news){
        types = 'quote';
    }
    if(quote){
        if(news){
            types = 'quote,news';
        }
        else {
            types = 'quote'
        }
    }
    return new Promise(function (resolve, reject) {
        const uri = `https://api.iextrading.com/1.0/stock/${ticker}/batch?`;
        request({
            qs: {
                'types': types
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






