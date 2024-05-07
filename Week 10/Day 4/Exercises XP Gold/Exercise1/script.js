  // Function to fetch a random GIF from Giphy API
  async function fetchRandomGif() {
    const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
    const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        const gifUrl = data.data.images.original.url;
        appendGifToPage(gifUrl);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

// Function to append GIF to the page
function appendGifToPage(gifUrl) {
    const gifContainer = document.getElementById('gif-container');
    const gifImg = document.createElement('img');
    gifImg.src = gifUrl;
    gifImg.alt = 'Random GIF';
    gifContainer.appendChild(gifImg);
}

// Call the fetchRandomGif function
fetchRandomGif();