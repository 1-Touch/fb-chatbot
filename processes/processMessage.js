const sendText = require('./sendText');

module.exports = function processMessage(sender, text){
  let message = text.toLowercase();
  if(message.includes('hey') || message.includes('hello') || message.includes('hi')){
    sendText(sender.id, `Hey ${sender.name}, Howz you doing`)
  } else if(message.include('how are you')){
    sendText(sender.id, 'I am good, what about you')
  } else {
    sendText(sender.id, 'Chatbot echo : ' + text.substring(0, 100))
  }
}