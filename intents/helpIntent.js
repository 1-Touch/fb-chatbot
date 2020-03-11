const sendText = require('../processes/sendText');

module.exports = async function helpIntent(sender){
    message1 = 'Sorry, I didn\'t get that';
    message2 = 'If you need assistance press';
    message3 = '1. Excercise Recommendations';
    message4 = '2. Excercise Info';
    message5 = '3. Excersice Images';
    await sendText(sender, message1);
    await sendText(sender, message2);
    await sendText(sender, message3);
    await sendText(sender, message4);
    await sendText(sender, message5);
}