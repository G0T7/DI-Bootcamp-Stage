const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const apiUrl = 'https://api.giphy.com/v1/gifs/search';

const gifForm = document.getElementById('gif-form');
const categoryInput = document.getElementById('category-input');
const gifContainer = document.getElementById('gif-container');
const deleteButton = document.getElementById('delete-button');

gifForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const category = categoryInput.value.trim();
    if (category) {
        try {
            const response = await fetch(`${apiUrl}?q=${category}&api_key=${apiKey}`);
            if (!response.ok) {
                throw new Error('Failed to fetch GIFs');
            }
            const data = await response.json();
            displayGIFs(data.data);
        } catch (error) {
            console.error('Error fetching GIFs:', error.message);
        }
    } else {
        console.error('Category input cannot be empty');
    }
});

deleteButton.addEventListener('click', () => {
    gifContainer.innerHTML = '';
});

function displayGIFs(gifs) {
    gifContainer.innerHTML = '';
    gifs.forEach(gif => {
        const gifImg = document.createElement('img');
        gifImg.src = gif.images.original.url;
        gifImg.alt = 'GIF';
        gifContainer.appendChild(gifImg);
    });
}