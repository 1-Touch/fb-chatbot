const greetingIntent = require('../intents/greetingIntent');
const greetings = require('../messages/questions/greetings');
const informalGreetingIntent = require('../intents/informalGreetingIntent');
const informalGreetings = require('../messages/questions/informalGreetings');
const excerciseReccomendIntent = require('../intents/excerciseReccomendIntent');
const sendGenericTemplate = require('../templates/sendGenericTemplate');
const helpIntent = require('../intents/helpIntent');

module.exports = function processMessage(sender, text) {
  let message = text.toLowerCase();
  if (greetings.find(greeting => message.includes(greeting))) {
    greetingIntent(sender);
  } else if (informalGreetings.find(informalGreeting => message.includes(informalGreeting))) {
    informalGreetingIntent(sender);
  } else if(text === '1'){
    excerciseReccomendIntent(sender);
  } else if(text === '3'){
    sendGenericTemplate(sender);
  } else {
    helpIntent(sender);
  }
};
