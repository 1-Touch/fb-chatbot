const greeting = require('../intents/greeting');
const sendText = require('./sendText');

module.exports = function processMessage(sender, text) {
  let message = text.toLowerCase();
  console.log('sender details are ---', sender);
  if (
    message.includes('hey') ||
    message.includes('hello') ||
    message.includes('hi') ||
    message.includes('hlo')
  ) {
    greeting(sender);
  } else if (message.includes('how are you')) {
    sendText(sender, 'I am good, what about you');
  } else {
    sendText(sender, 'Chatbot echo : ' + text.substring(0, 100));
  }
};
