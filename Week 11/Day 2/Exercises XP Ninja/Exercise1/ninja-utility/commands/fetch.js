// commands/fetch.js

const axios = require('axios');

async function fetchWeather() {
    try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=London&appid=your_api_key');
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching weather:', error.message);
    }
}

module.exports = fetchWeather;
