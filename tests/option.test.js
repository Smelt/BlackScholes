const Stock = require('../models/stock');
const Option = require('../models/option');

const optionService = require('../services/options.service');

module.exports.test = async function(ticker, price, date){
    console.log("Line 4 test");
    let stock = new Stock(ticker); 
    await stock.refreshPrice();
    
    console.log(JSON.stringify(stock));
    
    let option = new Option(stock.getSymbol(), stock.getPrice(), date);
    option =  await optionService.getOptionData(option);
    /*
    console.log(option);
    option.printSummary();
    */
}