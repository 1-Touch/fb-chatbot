const sendText = require('../processes/sendText');
const informalGreetings = require('../messages/replies/informalGreetings');

module.exports = function informalGreetingIntent(sender) {
  const informalGreetingText = Math.floor(Math.random() * informalGreetings.length);
  sendText(sender, informalGreetings[informalGreetingText]);
};
