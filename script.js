
const searchForm = document.getElementById("search-form");
const cityInput = document.getElementById("city-input");
const statusText = document.getElementById("status");
const weatherCard = document.getElementById("weather-card");

// Show a suitable description for each weather code.
function getWeatherDescription(code) {
    if (code === 0) return "Clear sky";
    if ([1, 2, 3].includes(code)) return "Partly cloudy";
    if ([45, 48].includes(code)) return "Foggy";
    if ([51, 53, 55, 56, 57].includes(code)) return "Drizzle";
    if ([61, 63, 65, 66, 67].includes(code)) return "Rainy";
    if ([71, 73, 75, 77].includes(code)) return "Snowy";
    if ([80, 81, 82].includes(code)) return "Rain showers";
    if ([85, 86].includes(code)) return "Snow showers";
    if ([95, 96, 99].includes(code)) return "Thunderstorm";

    return "Weather information unavailable";
}

// Select an icon based on the weather code.
function getWeatherIcon(code, isDay) {
    if (code === 0) return isDay ? "☀️" : "🌙";
    if ([1, 2].includes(code)) return "🌤️";
    if (code === 3) return "☁️";
    if ([45, 48].includes(code)) return "🌫️";
    if (code >= 51 && code <= 67) return "🌧️";
    if (code >= 71 && code <= 77) return "❄️";
    if (code >= 80 && code <= 82) return "🌦️";
    if (code >= 85 && code <= 86) return "🌨️";
    if (code >= 95) return "⛈️";

    return "🌡️";
}

// Get weather when the user submits the search form.
searchForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const city = cityInput.value.trim();

    if (!city) {
        statusText.textContent = "Please enter a city name.";
        return;
    }

    statusText.textContent = "Loading weather...";
    weatherCard.classList.add("hidden");

    try {
        // STEP 1: Find the city's coordinates.
        const geoURL =
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;

        // Send an HTTP GET request.
        const geoResponse = await fetch(geoURL);

        // Check whether the HTTP request succeeded.
        if (!geoResponse.ok) {
            throw new Error("Could not search for the city.");
        }

        // Convert the JSON response into a JavaScript object.
        const geoData = await geoResponse.json();

        if (!geoData.results || geoData.results.length === 0) {
            statusText.textContent =
                "City not found. Please check the spelling.";
            return;
        }

        const location = geoData.results[0];
        const latitude = location.latitude;
        const longitude = location.longitude;

        // STEP 2: Request weather using the coordinates.
        const weatherURL =
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m&timezone=auto`;

        const weatherResponse = await fetch(weatherURL);

        if (!weatherResponse.ok) {
            throw new Error("Could not retrieve weather data.");
        }

        // Parse the weather JSON response.
        const weatherData = await weatherResponse.json();
        const current = weatherData.current;

        // STEP 3: Display the received data on the webpage.
        document.getElementById("city-name").textContent =
            `${location.name}, ${location.country}`;

        document.getElementById("weather-description").textContent =
            getWeatherDescription(current.weather_code);

        document.getElementById("weather-icon").textContent =
            getWeatherIcon(current.weather_code, current.is_day);

        document.getElementById("temperature").textContent =
            Math.round(current.temperature_2m);

        document.getElementById("feels-like").textContent =
            `Feels like: ${Math.round(current.apparent_temperature)} °C`;

        document.getElementById("humidity").textContent =
            `${current.relative_humidity_2m}%`;

        document.getElementById("wind-speed").textContent =
            `${current.wind_speed_10m} km/h`;

        weatherCard.classList.remove("hidden");
        statusText.textContent = "Weather updated successfully!";

    } catch (error) {
        console.error("Weather API error:", error);

        statusText.textContent =
            "Something went wrong. Check your internet and try again.";
    }
});
