
const finance = require('finance');
const yahoo = require('yahoo-nasdaq');

module.exports.getStockData = function(stock){
   const stockParam = {
       symbol: stock.getSymbol()
   }

   
  // console.log(info);
    finance.keystatistics.getKeyStatistics(stockParam, (err, data) => {
    stock.setHeldInstitutions(data.heldPercentInstitutions.raw);
    stock.setSharesShort(data.shortRatio.raw);
    stock.setBeta(data.beta.raw);
    //stock.printSummary();
   });
}






