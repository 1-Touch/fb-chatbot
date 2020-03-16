const greetingIntent = require('../intents/greetingIntent');
const greetings = require('../messages/questions/greetings');
const informalGreetingIntent = require('../intents/informalGreetingIntent');
const informalGreetings = require('../messages/questions/informalGreetings');
const excerciseReccomendIntent = require('../intents/excerciseReccomendIntent');
const excerciseImageIntent = require('../intents/excerciseImageIntent');
const helpIntent = require('../intents/helpIntent');
const sendText = require('./sendText');
const quickReplies = require('../templates/quickReplies');

module.exports = function processMessage(sender, text) {
  let message = text.toLowerCase();
  quickReplies(sender);
  if (greetings.find(greeting => message.includes(greeting))) { // Greetings like hey, hello
    greetingIntent(sender);
  } else if (informalGreetings.find(informalGreeting => message.includes(informalGreeting))) { // Greetings like How are you?
    informalGreetingIntent(sender);
  } else if(text.includes('reccomend excercise')){
    excerciseReccomendIntent(sender);
  } else if(text.includes('excercise images')){
    excerciseImageIntent(sender)
  } else if(text.includes('thanks for recommendation')){
    sendText(sender, 'Feel free to come again!')
  } else if(text.includes('suggest another')){
    excerciseImageIntent(sender)
  } else {
    helpIntent(sender);
  }
};
