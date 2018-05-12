const accountSid = 'ACced61053492c7244e6a08671fa9c328c';
const authToken = 'cb792e062d923a66fcb9e9b78a17ad62';

const twilio = require('twilio');
const client = new twilio(accountSid, authToken);

exports.sendMessage = function (uberObj) {
  client.messages.create({
        body: constructMessageBody(uberObj),
        to: '+14437993472',
        from: '+14439555752'
    }).then((message) => console.log(message.sid));

}

function constructMessageBody(message) {
    return message;
}