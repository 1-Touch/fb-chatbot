const greetingIntent = require('../intents/greetingIntent');
const greetings = require('../messages/questions/greetings');
const informalGreetingIntent = require('../intents/informalGreetingIntent');
const informalGreetings = require('../messages/questions/informalGreetings');
const helpIntent = require('../intents/helpIntent');
const sendText = require('./sendText');

module.exports = function processMessage(sender, text) {
  let message = text.toLowerCase();
  if (greetings.find(greeting => message.includes(greeting))) {
    greetingIntent(sender);
  } else if (informalGreetings.find(informalGreeting => message.includes(informalGreeting))) {
    informalGreetingIntent(sender);
  } else {
    helpIntent(sender);
    // sendText(sender, 'Chatbot echo : ' + text.substring(0, 100));
  }
};
