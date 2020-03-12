const sendGenericTemplate = require('../templates/sendGenericTemplate');
const sendText = require('../processes/sendText');
const axios = require('axios');

module.exports = function excerciseImageIntent(sender){
    axios.get('https://wger.de/api/v2/exerciseimage')
    .then(excercise => {
        const randomExcercise = Math.floor(Math.random() * excercise.data.results.length);
        sendGenericTemplate(sender, excercise.data.results[randomExcercise].image);
    })
    .catch(err => {
        console.log(err)
        sendText(sender, 'There was issue while reccomending excercise');
    })
}
