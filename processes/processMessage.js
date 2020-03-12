const greetingIntent = require('../intents/greetingIntent');
const greetings = require('../messages/questions/greetings');
const informalGreetingIntent = require('../intents/informalGreetingIntent');
const informalGreetings = require('../messages/questions/informalGreetings');
const excerciseImageIntent = require('../intents/excerciseImageIntent');
const helpIntent = require('../intents/helpIntent');
const sendText = require('./sendText');

module.exports = function processMessage(sender, text) {
  let message = text.toLowerCase();
  if (greetings.find(greeting => message.includes(greeting))) { // Greetings like hey, hello
    greetingIntent(sender);
  } else if (informalGreetings.find(informalGreeting => message.includes(informalGreeting))) { // Greetings like How are you?
    informalGreetingIntent(sender);
  } else if(text === '1'){
    excerciseReccomendIntent(sender);
  } else if(text === '3'){
    excerciseImageIntent(sender)
  } else if(text.includes('thanks for recommendation')){
    sendText(sender, 'Feel free to come again!')
  } else if(text.includes('suggest another')){
    excerciseImageIntent(sender)
  } else {
    helpIntent(sender);
  }
};
