const request = require('request');


module.exports.getCryptoPrice = async function(symbol){
    return new Promise(function (resolve, reject) {
        const uri = `https://min-api.cryptocompare.com/data/price?`;
        request({
            qs: {
                'fsym': 'BTC',
                'tsyms': 'USD'
            },
            uri: uri,
            method: 'GET'
        }, function (err, res, body) {
            if (err) {
                console.log("ERR");
                console.log(err);
                reject(err);
            }
            else {
        
                var results = JSON.parse(body);
                resolve(results.USD);
            }
        });
    });
}