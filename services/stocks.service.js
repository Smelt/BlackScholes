
const finance = require('finance');
const yahoo = require('yahoo-nasdaq');
const request = require('request');

module.exports.getStockData = async function (stock) {
    console.log("l----");
    const stockParam = {
        symbol: stock.getSymbol()
    }
    const [inst, realTime] = await Promise.all([institutionalData(stockParam), getCurrData(stockParam.symbol)]);
    console.log(inst);
    console.log(realTime);
    stock[inst] = inst;
    stock[realTime] = realTime;
    console.log(JSON.stringify(stock));
   // stock.setHeldInstitutions(inst.heldPercentInstitutions.raw);
   // stock.setSharesShort(inst.shortRatio.raw);
  //  stock.setBeta(inst.beta.raw);
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

function getCurrData(ticker) {
    return new Promise(function (resolve, reject) {
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






