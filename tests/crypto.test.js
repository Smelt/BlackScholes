
const Crypto = require('../models/crypto');
const RMA = require('../scheduler/rma');
const CryptoService = require('../services/crypto.service');


module.exports.rmaTest = async function(ticker = 'ETH'){
    let ethereum = new Crypto(ticker);
    RMA.nodeSchedule(ethereum, 4);
}

moodule.exports.newsTest = async function(ticker = 'ETH'){
    
}

/*
let bitcoin = new Crypto('BTC');
rma.nodeSchedule(bitcoin, 3);
let ethereum = new Crypto('ETH');
rma.nodeSchedule(ethereum, 3);
*/