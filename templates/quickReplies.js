const sendRequest = require('../processes/sendRequest');

module.exports = function quickReplies(sender){
    const messageData = {
        "quick_replies":[
        {
            "content_type":"text",
            "title":"Reccomend Excercise",
            "payload":"reccomend excercise"
        },{
            "content_type":"text",
            "title":"Excercise Images",
            "payload":"excercise images"
        }
        ]
    }
    sendRequest(sender, messageData);
}