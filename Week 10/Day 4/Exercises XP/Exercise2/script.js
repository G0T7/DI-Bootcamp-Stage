// Function to fetch data from Giphy API for 10 gifs related to "sun" starting from position 2
async function fetchSunGifs() {
    const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
    const searchTerm = 'sun';
    const limit = 10;
    const offset = 2;
    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&limit=${limit}&offset=${offset}&api_key=${apiKey}`;
  
    try {
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }
  
  // Call the fetchSunGifs function
  fetchSunGifs();
  