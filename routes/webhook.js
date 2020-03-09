const express = require('express');
const router = express.Router();

// Webhook verification
router.get('/', (req, res) => {

  // Your verify token. Should be a random string.
  let VERIFY_TOKEN = process.env.VERIFY_TOKEN;

  let mode = req.query['hub.mode'];
  let token = req.query['hub.verify_token'];
  let challenge = req.query['hub.challenge'];
    
  if (mode && token) {
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      console.log('WEBHOOK_VERIFIED');
      res.status(200).send(challenge);
    
    } else {
      res.sendStatus(403); // 403 - Forbidden
    }
  }
});

// Creates the endpoint for our webhook 
router.post('/', (req, res) => {  
 
  let body = req.body;

  if (body.object === 'page') {
    body.entry.forEach(function(entry) {
      let webhook_event = entry.messaging[0];
      console.log(webhook_event); // ************ Needa to be replaced ***************
      for (let i=0; i<messaging_events.length; i++){
        let event = messaging_events[i];
        let sender = event.sender.id;
        if(event.message && event.message.text){
          let text = event.message.text
          sendText(sender, 'Text echo' + text.substring(0, 100))
        }
      }
    });
    res.status(200).send('EVENT_RECEIVED');
  } else {
    res.sendStatus(404); // 404 - Not Found
  }
});

function sendText(sender, text){
  let messageData = {text: text}
  request({
    url: 'https://graph.facebook.com/v2.6/me/messages',
    qs: {access_token: process.env.PAGE_ACCESS_TOKEN},
    method: 'POST',
    json: {
      recipient: {id: sender},
      message: messageData
    }, function(error, response, body){
      if(error){
        console.log('sending error')
      } else if(response.body.error){
        console.log('response body error')
      }
    }
  })
}

module.exports = router;