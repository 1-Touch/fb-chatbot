const sendText = require('../processes/sendText');
const axios = require('axios');

module.exports = function excerciseRecommendIntent(sender){
    axios.get('https://wger.de/api/v2/exercise')
    .then(excercise => {
        console.log('the excercise is',excercise.data);
        const randomExcercise = Math.floor(Math.random() * excercise.data.results.length);
        sendText(sender, `Name : ${excercise.data.results[randomExcercise].name}`);
        sendText(sender, `Excercise : ${excercise.data.results[randomExcercise].description}`);
    //     .then(res => {
    //     const randomExcercise = Math.floor(Math.random() * res.results.length);
    //     sendText(sender, `Name : ${res.results[randomExcercise].name}`);
    //     sendText(sender, `Excercise : ${res.results[randomExcercise].description}`);
    // })
    })
    .catch(err => {
        console.log(err)
        sendText(sender, 'There was issue while reccomending excercise');
    })
}