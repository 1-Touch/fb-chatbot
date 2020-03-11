const sendText = require('../processes/sendText');
const greetings = require('../messages/replies/greetings');

module.exports = function greetingIntent(sender) {
  const greetingText = Math.floor(Math.random() * greetings.length);
  sendText(sender, greetings[greetingText]);
};
