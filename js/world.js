let apiKey = "1e3e8f230b6064d27976e41163a82b77";

// Function to get the date
let date = new Date().getDate();
let months_name = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
let months = new Date().getMonth();
let year = new Date().getFullYear();

let FullDate = `${months_name[months]} ${date}, ${year}`;

// Weather info
async function city(cityName) {
    let url = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${apiKey}`
    );
    let data = await url.json();
    console.log(data);

    let box = document.querySelector(".box");

    if(!box){
        box = document.createElement('div');
        box.className = 'box';
        document.body.appendChild(box);
    }

    let weatherBox = document.createElement('div');
    weatherBox.className = 'weather-box';

    let nameDiv = document.createElement('div');
    nameDiv.className = 'name';

    let cityElement = document.createElement('div');
    cityElement.className = 'city-name city';
    cityElement.innerHTML = data.name;

    let tempElement = document.createElement('div');
    tempElement.className = 'weather-temp temp';
    tempElement.innerHTML = Math.floor(data.main.temp) + "°";

    let weatherIconDiv = document.createElement('div');
    weatherIconDiv.className = 'weather-icon';

    let weatherImg = document.createElement('img');
    weatherImg.className = 'weather';

    if (data.weather[0].main === "Rain") {
        weatherImg.src = "img/rain.png";
    } else if (data.weather[0].main === "Clear") {
        weatherImg.src = "img/sun.png";
    } else if (data.weather[0].main === "Snow") {
        weatherImg.src = "img/snow.png";
    } else if (
        data.weather[0].main === "Clouds" ||
        data.weather[0].main === "Smoke"
    ) {
        weatherImg.src = "img/cloud.png";
    } else if (
        data.weather[0].main === "Mist" ||
        data.weather[0].main === "Fog"
) {
        weatherImg.src = "img/mist.png";
    } else if (data.weather[0].main === "Haze") {
        weatherImg.src = "img/haze.png";
    }

    weatherIconDiv.appendChild(weatherImg);
    nameDiv.appendChild(cityElement);
    nameDiv.appendChild(tempElement);
    weatherBox.appendChild(nameDiv);
    weatherBox.appendChild(weatherIconDiv);
    box.appendChild(weatherBox);

}

city("London");
city("Paris");
city("Mumbai");
city("Tokyo");
city("Rome");