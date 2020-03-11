const sendText = require('../processes/sendText');

module.exports = function helpIntent(sender){
    message1 = 'Sorry, I didn\'t get that';
    message2 = 'If you need assistance press';
    message3 = '1. Excercise Recommendations';
    message4 = '2. Excercise Info';
    message5 = '3. Excersice Images';
    sendText(sender, message1);
    sendText(sender, message2);
    sendText(sender, message3);
    sendText(sender, message4);
    sendText(sender, message5);
}