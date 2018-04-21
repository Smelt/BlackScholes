class Option {

    constructor(symbol, stockPrice, expiration){
        this.symbol = symbol;
        this.expiration = expiration;
        this.stockPrice = stockPrice;       
    }

    setCall(strike, price, iv ){
        this.call = {
            strike: strike,
            price: price,
            iv: iv
        }
    }

    setPut(strike, price, iv){
        this.put = {
            strike: strike,
            price: price,
            iv: iv
        }
    }

    getPut(){
        return this.put;
    }

    getCall(){
        return this.call ;
    }

    getStockPrice(){
        return this.stockPrice;
    }

    getSymbol(){
        return this.symbol;
    }

    getExpiration(){
        return this.expiration;
    }

    printSummary(){
        console.log(`---${this.symbol}---${this.expiration}`);
        console.log('Call: ');
        console.log(`Strike ${this.call.strike}   Price ${this.call.price}  IV ${this.call.iv}`);
        console.log();
        console.log('Put: ');
        console.log(`Strike ${this.put.strike}   Price ${this.put.price}  IV ${this.put.iv}`);
        console.log();
    }
}

module.exports = Option;