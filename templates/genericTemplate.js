const sendRequest = require('../processes/sendRequest');

module.exports = function genericTemplate(sender, image_url){
    const messageData = {
        "attachment":{
            "type":"template",
            "payload":{
                "template_type":"generic",
                "elements":[
                    {
                    "title":"Try this!",
                    "image_url":image_url,
                    "subtitle":"Go ahead and try hitting this excercise today.",
                    "default_action": {
                    "type": "web_url",
                    "url": image_url,
                    "webview_height_ratio": "compact",
                    },
                    "buttons":[
                    {
                        "type":"postback",
                        "title":"Thanks!!!",
                        "payload":"thanks for recommendation"
                    },{
                        "type":"postback",
                        "title":"Suggest another",
                        "payload":"suggest another"
                    }              
                    ]      
                }
                ]
            }
        }
    }
    sendRequest(sender, messageData);
}