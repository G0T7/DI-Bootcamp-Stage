const apiUrl = 'https://api.sunrise-sunset.org/json';

const cityForm = document.getElementById('city-form');
const parisLatitudeInput = document.getElementById('paris-latitude');
const parisLongitudeInput = document.getElementById('paris-longitude');
const newYorkLatitudeInput = document.getElementById('new-york-latitude');
const newYorkLongitudeInput = document.getElementById('new-york-longitude');
const sunriseTimesDiv = document.getElementById('sunrise-times');

cityForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const parisLatitude = parisLatitudeInput.value.trim();
    const parisLongitude = parisLongitudeInput.value.trim();
    const newYorkLatitude = newYorkLatitudeInput.value.trim();
    const newYorkLongitude = newYorkLongitudeInput.value.trim();

    try {
        const parisResponse = await fetch(`${apiUrl}?lat=${parisLatitude}&lng=${parisLongitude}`);
        const newYorkResponse = await fetch(`${apiUrl}?lat=${newYorkLatitude}&lng=${newYorkLongitude}`);
        
        if (!parisResponse.ok || !newYorkResponse.ok) {
            throw new Error('Failed to fetch sunrise times');
        }

        const [parisData, newYorkData] = await Promise.all([parisResponse.json(), newYorkResponse.json()]);

        const parisSunrise = parseSunriseTime(parisData);
        const newYorkSunrise = parseSunriseTime(newYorkData);

        sunriseTimesDiv.innerHTML = `<p>Paris Sunrise Time: ${parisSunrise}</p><p>New York Sunrise Time: ${newYorkSunrise}</p>`;
    } catch (error) {
        console.error('Error fetching sunrise times:', error.message);
    }
});

function parseSunriseTime(data) {
    const sunrise = data.results.sunrise;
    const sunriseDate = new Date(sunrise);
    return sunriseDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
}
