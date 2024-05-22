// https://api.openweathermap.org/data/2.5/weather?q=jaipur&appid=323a2be39678b3bbe5841664eadcf90d&units=metric

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const apiKey = "323a2be39678b3bbe5841664eadcf90d";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".windspeed").innerHTML = data.wind.speed + " km/hr";
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);

});