class Stock {

    constructor(symbol){
        this.symbol = symbol;
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
}

module.exports = Stock;