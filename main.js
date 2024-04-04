let apiKey = "1e3e8f230b6064d27976e41163a82b77";
let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&`;

navigator.geolocation.getCurrentPosition(async function (position) {
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  let respond = await fetch(url + `lat=${lat}&lon=${lon}&` + `appid=${apiKey}`);
  let data = await respond.json();

  //
  let cityMain = document.getElementById("city-name");
  let cityTemp = document.getElementById("metric");
  let weatherMain = document.querySelector("#weather-main");
  let mainHumidity = document.getElementById("humidity");
  let mainFeel = document.getElementById("feels-like");
  let weatherImg = document.getElementById("weather-icon");
  let tempMinWeather = document.getElementById("temp-min-today");
  let tempMaxWeather = document.getElementById("temp-max-today");

  //
  cityMain.innerHTML = data.name;
  cityTemp.innerHTML = Math.floor(data.main.temp) + "°";
  weatherMain.innerHTML = data.weather[0].description;
  mainHumidity.innerHTML = Math.floor(data.main.humidity);
  mainFeel.innerHTML = Math.floor(data.main.feels_like);
  tempMinWeather.innerHTML = Math.floor(data.main.temp_min) + "°";
  tempMaxWeather.innerHTML = Math.floor(data.main.temp_max) + "°";

   // image changes according to weather
   if (data.weather[0].main === "Rain") {
    weatherImg.src = "img/rain.png";
  } else if (data.weather[0].main === "Clear") {
    weatherImg.src = "img/sun.png";
  } else if (data.weather[0].main === "Snow") {
    weatherImg.src = "img/snow.png";
  } else if (data.weather[0].main === "Clouds") {
    weatherImg.src = "img/cloud.png";
  } else if (data.weather[0].main === "Mist") {
    weatherImg.src = "img/mist.png";
  } else if (data.weather[0].main === "Haze") {
    weatherImg.src = "img/haze.png"
  }


  console.log(data);
});
