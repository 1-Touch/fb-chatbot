const sendRequest = require('./sendRequest');

module.exports = function sendText(sender, text) {
  let messageData = { text: text };
  sendRequest(sender, messageData);
};
