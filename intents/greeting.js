const sendText = require('../processes/sendText');

const greetings = [
  'Hello, sunshine!',
  'Howdy, partner!',
  'Hey, howdy, hi!',
  'What’s kickin’, little chicken?',
  'Peek-a-boo!',
  'Howdy-doody!',
  'Hey there, freshman!',
  'Hi, mister!',
  'I come in peace!',
  'Put that cookie down!',
  'Ahoy, matey!',
  'Hiya!'
];

module.exports = function greeting(sender) {
  const greetingText = Math.floor(Math.random() * greetings.length);
  sendText(sender, greetings[greetingText]);
};
