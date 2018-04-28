const schedule = require('node-schedule');



module.exports.nodeSchedule = async function(asset, interval){
    let rules = [];
    const arrSize = 60 / interval;
    for(var i  = 0; i < arrSize; i+= 1){
        let seconds = i * interval;
        rules[i] = new schedule.RecurrenceRule();
        rules[i].second = seconds;
    }

    rules.forEach((rule) => {
        schedule.scheduleJob(rule, async function(time){
            await asset.refreshPrice();
            console.log(`${asset.getSymbol()} ${asset.getPrice()} @${time}`);
        })
    })
 
}


