const sendRequest = require('../processes/sendRequest');

module.exports = function helpButtonTemplate(sender){
    const messageData = {
        "attachment":{
            "type":"template",
            "payload":{
              "template_type":"button",
              "text":"Sorry I missed that, What can I do for you?",
              "buttons":[
                {
                  "type":"postback",
                  "title":"Reccomend Excercise",
                  "payload": "reccomend excercise"
                },
                {
                    "type":"postback",
                    "title":"Excercise Images",
                    "payload": "excercise images"
                }
              ]
            }
          }
    }
    sendRequest(sender, messageData);
}