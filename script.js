var apiKey = "78041785c891db0a1918d36f6b50a6bc";
var apiURL = "http://api.openweathermap.org/data/2.5/weather?q=Charlotte&appid=78041785c891db0a1918d36f6b50a6bc";
//Function that returns weather from API per city entered//
function getWeatherFromApi (city){
   console.log (city);
   fetch(apiURL)
   .then(response => response.json())
   .then(data => {
     console.log(data);
     displayWeatherForecast (data);
     });
   
}
// Function that will display the results from searched city"
function displayWeatherForecast (weatherData){
    console.log (weatherData.wind.speed);
    $("#currentWindSpeed").text("Wind: "+weatherData.wind.speed);
}
getWeatherFromApi ("Charlotte");