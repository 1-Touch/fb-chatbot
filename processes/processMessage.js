const greetingIntent = require('../intents/greetingIntent');
const greetings = require('../messages/questions/greetings');
const sendText = require('./sendText');

module.exports = function processMessage(sender, text) {
  let message = text.toLowerCase();
  console.log('sender details are ---', sender);
  if (
    message.includes('hey') ||
    message.includes(greetings.map(greeting => greeting))
    // message.includes('hi') ||
    // message.includes('hlo')
  ) {
    greetingIntent(sender);
  } else if (message.includes('how are you')) {
    sendText(sender, 'I am good, what about you');
  } else {
    sendText(sender, 'Chatbot echo : ' + text.substring(0, 100));
  }
};
