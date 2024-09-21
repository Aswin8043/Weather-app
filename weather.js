document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'd19c56b9f13b4bed0df4b30a4bd7885c';
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

    const inputBox = document.getElementById("wtr-input");
    const searchBox = document.getElementById("wtr-submit");
    const weatherIcon = document.querySelector('.weather-icon');

    async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if (response.status == 404){
            document.querySelector('.error').style.display = 'block';
            document.querySelector('.weather').style.display = 'none';
    
        }
        else {
            var data = await response.json();

            document.querySelector(".wtr-temp").innerHTML = Math.round(data.main.temp) + " °C";
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".humidity-txt").innerHTML = data.main.humidity + " %";
            document.querySelector(".wind-txt").innerHTML = data.wind.speed + " m/s";
    
    
            if (data.weather[0].main == "Clear") {
                weatherIcon.src = "images/clear.png";
            }
            else if (data.weather[0].main == "Fog"){
                weatherIcon.src = "images/fog.png";
            }
            else if (data.weather[0].main == "Cloudy"){
                weatherIcon.src = "images/cloudy.png";
            }
            else if (data.weather[0].main == "Haze"){
                weatherIcon.src = "images/snow.png";
            }
    

        }

        // console.log(data);
    }

    searchBox.addEventListener("click", (e) => {
        e.preventDefault();
        checkWeather(inputBox.value);
        document.getElementById('wtr-input').value = "";
        document.querySelector('.weather').style.display = "block";
        document.querySelector('.error').style.display = "none";
    });
});

