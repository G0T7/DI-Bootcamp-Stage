import readline from 'readline';
import { getWeatherByCity, getWeatherByCoordinates } from './weather.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showWeatherDashboard() {
    rl.question('Would you like to get the weather by city name or coordinates? (Enter "city" or "coords"): ', (choice) => {
        if (choice.toLowerCase() === 'city') {
            rl.question('Enter a city name: ', async (city) => {
                await getWeatherByCity(city);
                rl.close();
            });
        } else if (choice.toLowerCase() === 'coords') {
            rl.question('Enter latitude: ', (lat) => {
                rl.question('Enter longitude: ', async (lon) => {
                    await getWeatherByCoordinates(lat, lon);
                    rl.close();
                });
            });
        } else {
            console.log('Invalid choice. Please enter "city" or "coords".');
            rl.close();
        }
    });
}

export { showWeatherDashboard };
