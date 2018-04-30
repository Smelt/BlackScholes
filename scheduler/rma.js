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
            let ma = calculatingMa(movingArr);
            detectBreak(ma, movingArr, .00001);
            //console.log(`${asset.getSymbol()} ${asset.getPrice()} @${time}`);
            console.log(`${asset.getSymbol()} ${asset.getPrice()}  Moving Average: ${ma}`);
     
        })
    })
 
}

function detectBreak(ma, movingArr, threshold){
    const lastTick = movingArr[movingArr.length  - 1];
    const upperLimit = ma * (1 + threshold);
    const lowerLimit = ma * (1 - threshold);
    const percentage = threshold * 100;
    if(lastTick > upperLimit){
        console.log(`Upward Trend ${percentage}% - BUY BUY BUY\n`);
    }
    if(lastTick < lowerLimit){
        console.log(`Downward TREND ${percentage}% -  SELL SELL SELL\n`);
    }
}

function calculatingMa(movingArr){
    const len  = movingArr.length; 
    let sum = 0;
    movingArr.forEach((tick) => {
        sum += tick;
    })
    return sum/len;
}


