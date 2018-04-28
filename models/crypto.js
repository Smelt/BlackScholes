const cryptoService = require('../services/crypto.service');

class Crypto {
    
    constructor(symbol){
        this.symbol = symbol;
        this.data = {};
        //this.getSymbol = this.getSymbol.bind(this);
        //this.refreshData = this.refreshData.bind(this);
    }

    getPrice(){
        return this.price;
    }

    getSymbol(){
        return this.symbol;
    }

    setPrice(price){
        this.price = price;
    }

    printSummary(){

    }

    async refreshPrice(){
        this.price = await cryptoService.getCryptoPrice(this.symbol);
        
    }
}

module.exports = Crypto;