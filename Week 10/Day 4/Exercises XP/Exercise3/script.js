// Async function to fetch Star Wars starship data
async function fetchStarshipData() {
    const apiUrl = 'https://www.swapi.tech/api/starships/9/';
  
    try {
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
  
      const objectStarWars = await response.json();
      console.log(objectStarWars.result);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }
  
  // Call the async function
  fetchStarshipData();
  