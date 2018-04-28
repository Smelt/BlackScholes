module.exports.stockPrice = async function(ticker, price, date){
    let stock = new Stock(ticker);
    //await stockService.getStockData(stock);
    stock.refreshPrice();
    console.log(JSON.stringify(stock));
    
    let option = new Option(stock.getSymbol(), stock.getPrice(), date);
    option =  await optionService.getOptionData(option);
    console.log(option);
    option.printSummary();
    
}