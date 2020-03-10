const express = require('express');
const processMessage = require('../processes/processMessage');

const router = express.Router();

// Webhook verification
router.get('/', (req, res) => {

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
    // body.entry.forEach(function(entry) {
      let webhook_event = body.entry[0].messaging;
      console.log('webhook_event console message ',webhook_event); // ************ Needa to be replaced ***************
      for (let i=0; i<webhook_event.length; i++){
        let event = webhook_event[i];
        let sender = event.sender;
        if(event.message && event.message.text){
          let text = event.message.text
          // sendText(sender, 'Chatbot echo: ' + text.substring(0, 100))
          processMessage(sender, text);
        }
      }
    // });
    res.status(200).send('EVENT_RECEIVED');
  } else {
    res.sendStatus(404); // 404 - Not Found
  }
});

module.exports = router;