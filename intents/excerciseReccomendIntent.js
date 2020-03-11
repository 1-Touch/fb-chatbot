module.exports = function excerciseRecommendIntent(sender){
    let excercises = request({
        url: 'https://wger.de/api/v2/exercise',
        method: 'GET',
        function(error, response) {
          if (error) {
            console.log('sending error');
          } else if (response.body.error) {
            console.log('response body error');
          }
        }
      });

      console.log('the excercise variable', excercises)
}