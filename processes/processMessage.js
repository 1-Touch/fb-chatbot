const greetingIntent = require('../intents/greetingIntent');
const greetings = require('../messages/questions/greetings');
const informalGreetingIntent = require('../intents/informalGreetingIntent');
const informalGreetings = require('../messages/questions/informalGreetings');
const sendText = require('./sendText');

module.exports = function processMessage(sender, text) {
  let message = text.toLowerCase();
  console.log('sender details are ---', sender);
  if (greetings.find(greeting => message.includes(greeting))) {
    greetingIntent(sender);
  } else if (informalGreetings.find(informalGreeting => message.includes(informalGreeting))) {
    informalGreetingIntent(sender);
    // sendText(sender, 'I am good, what about you');
  } else {
    sendText(sender, 'Chatbot echo : ' + text.substring(0, 100));
  }
};
