const stockService = require('../services/stocks.service');

class Stock {
    
    constructor(symbol){
        this.symbol = symbol;
        this.data = {};
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

    setHeldInstitutions(heldInstitutions){
        this.data.heldInstitutions = heldInstitutions;
    }

    setSharesShort(shortRatio){
        this.data.shortRatio = shortRatio;
    }

    setBeta(beta){
        this.data.beta = beta;
    }

    async refreshPrice(){
       const data = await stockService.getStockData(this.symbol, true, false );
       this.price = data.quote.latestPrice;
    }

    async refreshMarketData(){
        this.marketData = await stockService.getStockData(this.symbol, true);
    }

    printSummary(){
        console.log(`-------${this.symbol}--@${this.price}------------------`);
        console.log(`Institutional investors:  ${this.data.heldInstitutions * 100}%`);
        console.log(`Shares short percent of float:  ${this.data.shortRatio}%`);
        console.log(`Beta: ${this.data.beta}`);
        console.log('--------------------------------------------------------');
    }
}

module.exports = Stock;