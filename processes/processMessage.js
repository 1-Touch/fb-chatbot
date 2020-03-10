const sendText = require('./sendText');

module.exports = function processMessage(sender, text){
  let message = text.toLowerCase();
  console.log('sender details are ---', sender)
  switch(message){
    case message.includes('hey') || message.includes('hello') || message.includes('hi'):
      sendText(sender, `Hey there, Howz you doing`)
      break;
    case message.includes('how are you'):
      sendText(sender, 'I am good, what about you')
      break;
    default:
      sendText(sender, 'Chatbot echo : ' + text.substring(0, 100))
      break;
  }
  // if(message.includes('hey') || message.includes('hello') || message.includes('hi')){
  //   sendText(sender, `Hey there, Howz you doing`)
  // } else if(message.includes('how are you')){
  //   sendText(sender, 'I am good, what about you')
  // } else {
  //   sendText(sender, 'Chatbot echo : ' + text.substring(0, 100))
  // }
}