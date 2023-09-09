    const api_key = "d51b6a58402c64f7b4f04f8e8aae6b73";
    const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    // const weather_icon = document.querySelector(".whether-icon");
    var weather_icon = document.getElementById("weather-image");
    // const searchBox = document.querySelector(".search input");
    var searchBox = document.getElementById('city-name');

    //using Enter key to press button
    searchBox.addEventListener("keypress", function(event){
        if(event.key == "Enter"){
            event.preventDefault();
            document.getElementById("search-btn").click();
        }
    });

    async function checkWhether(city){
        const response = await fetch(api_url + city + `&appid=${api_key}`);

        //check the city name and give result
        if(response.status == 404){
            // document.querySelector(".error").style.display = "block";
            document.getElementById("error").style.display = "block";
            // document.querySelector(".whether").style.display = "none";
            document.getElementById("weather").style.display = "none";
        }
        else{
            var data = await response.json();

            // document.querySelector(".city").innerHTML = data.name;
            document.getElementById("city").innerHTML = data.name;
            // document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.getElementById("temperature").innerHTML = Math.round(data.main.temp) + "°C";
            // document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
            document.getElementById("humidity").innerHTML = data.main.humidity + "%";
            // document.querySelector(".wind").innerHTML = data.wind.speed + 'Km/h';
            document.getElementById("wind").innerHTML = data.wind.speed + 'Km/h';

            //update the images as per the weather
            switch(data.weather[0].main){
                case "Clear":
                    weather_icon.src = "images/clear.png";
                    break;
                case "Clouds":
                    weather_icon.src = "images/clouds.png";
                    break;
                case "Drizzle":
                    weather_icon.src = "images/drizzle.png";
                    break;
                case "Mist":
                    weather_icon.src = "images/mist.png";
                    break;
                case "Rain":
                    weather_icon.src = "images/rain.png";
                    break;
                case "Snow":
                    weather_icon.src = "images/snow.png";
                    break;
            }
            // document.querySelector(".error").style.display = "block";
            document.getElementById("error").style.display = "none";
            // document.querySelector(".whether").style.display = "none";
            document.getElementById("weather").style.display = "block";
    }
}
{/* // searchBtn.addEventListener('click', ()=>{checkWhether(searchBox.value);}); //I can use this satement or "onclick= 'checkWhether(searchBox.value)'" statement */}

