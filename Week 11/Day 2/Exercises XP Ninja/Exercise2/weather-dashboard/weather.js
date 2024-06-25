import axios from 'axios';
import chalk from 'chalk';
import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.API_KEY;

async function getWeatherByCity(city) {
    try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const { main, weather } = response.data;
        const temperature = main.temp;
        const description = weather[0].description;

        console.log(chalk.blue(`Weather in ${city}:`));
        console.log(chalk.green(`Temperature: ${temperature}°C`));
        console.log(chalk.green(`Description: ${description}`));
    } catch (error) {
        console.error(chalk.red('Error fetching weather data:', error.response ? error.response.data.message : error.message));
    }
}

async function getWeatherByCoordinates(lat, lon) {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        const { main, weather } = response.data;
        const temperature = main.temp;
        const description = weather[0].description;

        console.log(chalk.blue(`Weather at coordinates (${lat}, ${lon}):`));
        console.log(chalk.green(`Temperature: ${temperature}°C`));
        console.log(chalk.green(`Description: ${description}`));
    } catch (error) {
        console.error(chalk.red('Error fetching weather data:', error.response ? error.response.data.message : error.message));
    }
}

export { getWeatherByCity, getWeatherByCoordinates };
