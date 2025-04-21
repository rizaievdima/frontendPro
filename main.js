const weatherInfoBlock = document.querySelector(".weather-widget__info");
const refreshBtn = document.querySelector(".refresh-btn");

async function getWeatherData() {
    const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=2c5204fdfb43e0e0d1cb286ba18182d2&units=metric"
    );
    const data = await response.json();
    return data;
}
function formatDate(date) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const day = days[date.getDay()];
    const month = months[date.getMonth()];
    const dayOfMonth = date.getDate();
    const year = date.getFullYear();

    return `${month} ${dayOfMonth}, ${year} - ${day}`;
}

function formatTime(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
}

async function renderWeather() {
    try {
        const weatherData = await getWeatherData();

        if (weatherData.cod !== 200) {
            throw new Error(weatherData.message);
        }

        const dateNow = new Date();
        const formattedDate = formatDate(dateNow);
        const formattedTime = formatTime(dateNow);

        weatherInfoBlock.innerHTML = `
        <div class="weather-widget__main-info">
            <p class="weather-widget__city">${weatherData.name}</p>
            <p class="weather-widget__date">${formattedDate}</p>
            <p class="weather-widget__time">${formattedTime}</p>
            <p class="">Humidity: ${weatherData.main.humidity}%</p>
            <p class="">Pressure: ${weatherData.main.pressure} hPa</p>
        </div>
        <div class="weather-widget__details">
            <img src="https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png" alt="Weather Icon">
            <p class="weather-widget__temperature">${Math.round(weatherData.main.temp)}°C</p>
            <p class="weather-widget__feels-like">Feels like: ${Math.round(weatherData.main.feels_like)}°C</p>
            <p class="weather-widget__description">${weatherData.weather[0].description}</p>

        </div>
    `;
    } catch (error) {
        weatherInfoBlock.innerHTML = `<p class="weather-widget__error">${error.message}</p>`;
        console.error("Error fetching weather data:", error);
    }
}

refreshBtn.addEventListener("click", renderWeather);

renderWeather();
