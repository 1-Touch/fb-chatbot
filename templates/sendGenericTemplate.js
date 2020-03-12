const sendRequest = require('../processes/sendRequest');

module.exports = function sendGenericTemplate(sender){
    const messageData = {
        "attachment":{
            "type":"template",
            "payload":{
                "template_type":"generic",
                "elements":[
                    {
                    "title":"Welcome!",
                    "image_url":"https://wger.de/media/exercise-images/4/Crunches-1.png",
                    "subtitle":"We have the right hat for everyone.",
                    "default_action": {
                    "type": "web_url",
                    "url": "https://petersfancybrownhats.com/view?item=103",
                    "webview_height_ratio": "tall",
                    },
                    "buttons":[
                    {
                        "type":"web_url",
                        "url":"https://petersfancybrownhats.com",
                        "title":"View Website"
                    },{
                        "type":"postback",
                        "title":"Start Chatting",
                        "payload":"DEVELOPER_DEFINED_PAYLOAD"
                    }              
                    ]      
                }
                ]
            }
        }
    }
    sendRequest(sender, messageData);
}