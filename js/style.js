// OWAPI: c846b3296b8dc58e1e12715684c5cfc5
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// api.openweathermap.org/data/2.5/find?q=London&units=imperial 

var searchBtn = document.getElementById("search") 
var cityInput = document.getElementById("city")

searchBtn.addEventListener("click", function(){
    var cityStore = cityInput.value
    console.log("click", cityStore)
    cityWeather(cityStore)
})

function cityWeather(searchCity) {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+searchCity+"&appid=c846b3296b8dc58e1e12715684c5cfc5&units=imperial"
    fetch(queryURL)
    .then(function(response) {
        console.log(response)
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        document.getElementById("city-name").textContent=data.name;
        document.getElementById("temp").textContent=data.main.temp;
        document.getElementById("humid").textContent=data.main.humidity;
        document.getElementById("wind").textContent=data.wind.speed;
        // document.getElementById("uv").textContent=data.name;
    })
}


call - coord = lat long
put in one call to get UV and 5 day forecast
icon under weather (open weather api icon display)
