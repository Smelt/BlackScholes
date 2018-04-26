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
        console.log(`Call:   strike ${this.call.strike}   price ${this.call.price}  IV ${this.call.iv}`);
        console.log(`Put:    strike ${this.put.strike}    price ${this.put.price}  IV ${this.put.iv}`);
        let avg = (this.call.price + this.put.price)/2;
        let vol = avg / this.stockPrice;
        console.log(`Volatility: ${vol * 100}% `);

    }
}

module.exports = Option;