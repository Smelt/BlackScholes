class Option {

    constructor(symbol, stockPrice, expiration){
        this.symbol = symbol;
        this.expiration = expiration;
        this.stockPrice = stockPrice;
    }

    getStockPrice(){
        return this.stockPrice;
    }

    getSymbol(){
        return this.symbol;
    }

    setCall(price){
        this.call = price;
    }

    setPut(price){
        this.put = price;
    }

    getExpiration(){
        return this.expiration;
    }
}

module.exports = Option;