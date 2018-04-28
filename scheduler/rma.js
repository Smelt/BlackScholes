const schedule = require('node-schedule');



module.exports.nodeSchedule = async function(asset, interval){
    let rules = [];
    const arrSize = 60 / interval;
    for(var i  = 0; i < arrSize; i+= 1){
        let seconds = i * interval;
        rules[i] = new schedule.RecurrenceRule();
        rules[i].second = seconds;
    }
    let movingArr = [];
    rules.forEach((rule) => {
        schedule.scheduleJob(rule, async function(time){
            await asset.refreshPrice();
            movingArr.push(asset.getPrice());
            if(movingArr.length > 10){
                movingArr.pop();
            }
            let rma = calculatingMa(movingArr);
            //console.log(`${asset.getSymbol()} ${asset.getPrice()} @${time}`);
            console.log(`${asset.getSymbol()} ${asset.getPrice()} RMA${rma}`);
        })
    })
 
}

function calculatingMa(movingArr){
    const len  = movingArr.length; 
    let sum = 0;
    console.log(len);
    movingArr.forEach((tick) => {
        sum += tick;
    })
    console.log(sum);
    return sum/len;
}


