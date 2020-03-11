const sendText = require('../processes/sendText');

module.exports = function helpIntent(sender){
    message = `
Sorry, I didn't get that
If you need assistance press
1. Excercise Recommendations
2. Excercise Info
3. Excersice Images
    `;
    sendText(sender, message);
}