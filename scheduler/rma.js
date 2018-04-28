const schedule = require('node-schedule');
const Crypto   = require('../models/crypto.js');


module.exports.nodeSchedule = async function(ao, time){
    var asset = new Crypto('BTC');
    let rules = [];

    for(var i  = 0; i < 20; i+= 1){
        let seconds = i * 3;
        rules[i] = new schedule.RecurrenceRule();
        rules[i].second = seconds;
    }

    rules.forEach((rule) => {
        schedule.scheduleJob(rule, async function(time){
            //console.log(asset);
            await asset.refreshData();
            console.log(`${asset.getSymbol()} ${asset.getPrice()} @${time}`);
        })
    })
    //console.log(asset);
   /*  const rule = new schedule.RecurrenceRule();
    const rule2 = new schedule.RecurrenceRule();
    const rule3 = new schedule.RecurrenceRule();
    const rule4 = new schedule.RecurrenceRule();
    rule2.second = 60;
    rule.second = 30;
    rule3.second = 15;
    rule4.second = 45;
    
    schedule.scheduleJob(rule4, function(time){
        console.log(asset.getSymbol());
         asset.refreshData();
        console.log(asset.getPrice());
     });
 
   schedule.scheduleJob(rule, function(time){
       console.log(asset.getSymbol());
        asset.refreshData();
       console.log(asset.getPrice());
    });

    schedule.scheduleJob(rule3, function(time){
        console.log(asset.getSymbol());
        asset.refreshData();
        console.log(asset.getPrice());
     });

    schedule.scheduleJob(rule2, function(time){
        console.log(asset.getSymbol());
        asset.refreshData();
        console.log(asset.getPrice());
     }); */
   // var m = schedule.scheduleJob(rule2, asset.refreshData());  
}


async function cryptoRoutine(asset){
    console.log(asset);
}