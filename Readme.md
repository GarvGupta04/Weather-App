# 🌦️ Weather App

A simple and responsive Weather App built using **HTML, CSS, and JavaScript** that displays real-time weather information for cities around the world using the **Open-Meteo API**.

Users can search for a city and view its current temperature, weather conditions, humidity, feels-like temperature, and wind speed.

## ✨ Features

- 🔍 **City Search:** Search for weather information by city name.
- 🌡️ **Current Temperature:** View the current temperature in Celsius.
- 🌤️ **Weather Conditions:** Display weather descriptions and corresponding icons.
- 💧 **Humidity:** Check the current relative humidity.
- 🌬️ **Wind Speed:** View the current wind speed in km/h.
- 🌡️ **Feels-Like Temperature:** See how the temperature feels.
- 📱 **Responsive Design:** Works on desktop and mobile screens.
- ⚠️ **Error Handling:** Handles invalid city names and API request failures.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Structures the application |
| CSS3 | Styling, layout, and responsive design |
| JavaScript | Application logic and API integration |
| HTTP | Communicates with external APIs |
| JSON | Transfers and processes weather data |
| Open-Meteo API | Provides geocoding and weather forecast data |

## 🌐 APIs Used

This project uses two APIs from Open-Meteo.

### 1. Geocoding API

Converts a city name into geographical coordinates (latitude and longitude).

`https://geocoding-api.open-meteo.com/v1/search`

### 2. Weather Forecast API

Retrieves current weather information using the city's latitude and longitude.

`https://api.open-meteo.com/v1/forecast`

The application uses JavaScript's `fetch()` method to make HTTP GET requests and processes the returned JSON using `response.json()`.

No API key is required for the free, non-commercial access used by this project.

## 📁 Project Structure

```text
weather-app/
├── index.html    # Application structure
├── style.css     # Styling and responsive layout
├── script.js     # API requests and weather logic
└── README.md     # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser such as Google Chrome, Safari, or Firefox.
- Python 3 installed on your system (for the local development server).
- An active internet connection.

### Installation and Setup

**1. Clone the repository**

```bash
git clone https://github.com/YOUR-USERNAME/weather-app.git
```

Replace `YOUR-USERNAME` with your GitHub username.

**2. Navigate to the project directory**

```bash
cd weather-app
```

**3. Start the local server**

```bash
python3 -m http.server 8000
```

**4. Open the application**

Visit the following address in your browser:

`http://localhost:8000`

**5. Search for a city**

Enter a city name, such as Vellore, Delhi, or London, and click the Search button to view its weather information.

## 🔄 How It Works

1. The user enters a city name into the search field.
2. JavaScript sends an HTTP GET request to the Open-Meteo Geocoding API.
3. The API returns a JSON response containing the city's geographical coordinates.
4. The application extracts the latitude and longitude from the response.
5. A second HTTP GET request retrieves weather information for those coordinates.
6. JavaScript parses the JSON response and extracts the current weather data.
7. The webpage updates dynamically to display the weather information.

## 📚 Concepts Learned

This project demonstrates practical use of:

- REST API integration.
- HTTP GET requests and HTTP response status codes.
- JSON parsing and JavaScript objects.
- Asynchronous JavaScript using `async` and `await`.
- Error handling using `try...catch`.
- DOM manipulation and event handling.
- Responsive web design.
- Working with external APIs and live data.

## 🔮 Future Improvements

- Add hourly and 7-day weather forecasts.
- Implement Celsius/Fahrenheit conversion.
- Add weather charts and temperature trends.
- Display air quality information.
- Add location-based weather detection.
- Save favourite cities and recent searches.
- Improve accessibility and add dark mode.

## 📄 Data Source and Attribution

Weather data is provided by [Open-Meteo](https://open-meteo.com/). Please refer to its [documentation](https://open-meteo.com/en/docs) and [terms](https://open-meteo.com/en/terms) for usage conditions and attribution requirements.

---

If you find this project useful, consider giving the repository a ⭐ on GitHub!
