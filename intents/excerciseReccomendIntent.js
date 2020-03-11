const sendText = require('../processes/sendText');
const axios = require('axios');

module.exports = function excerciseRecommendIntent(sender){
    axios.get('https://wger.de/api/v2/exercise')
    .then(data => data.json().then(res => {
        const randomExcercise = Math.floor(Math.random() * res.results.length);
        sendText(sender, `Name : ${res.results[randomExcercise].name}`);
        sendText(sender, `Excercise : ${res.results[randomExcercise].description}`);
    })
    )
    .catch(err => {
        console.log(err)
        sendText(sender, 'There was issue while reccomending excercise');
    })
}