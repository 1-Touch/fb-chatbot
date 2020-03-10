const request = require('request');

module.exports = function sendText(sender, text) {
  let messageData = { text: text };
  request({
    url: 'https://graph.facebook.com/v2.6/me/messages',
    qs: { access_token: process.env.PAGE_ACCESS_TOKEN },
    method: 'POST',
    json: {
      recipient: { id: sender },
      message: messageData
    },
    function(error, response) {
      if (error) {
        console.log('sending error');
      } else if (response.body.error) {
        console.log('response body error');
      }
    }
  });
};
