const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const apiUrl = 'https://api.giphy.com/v1/gifs/random';

const gifForm = document.getElementById('gif-form');
const categoryInput = document.getElementById('category-input');
const gifContainer = document.getElementById('gif-container');
const deleteAllButton = document.getElementById('delete-all-button');

gifForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const category = categoryInput.value.trim();
    if (category) {
        try {
            const response = await fetch(`${apiUrl}?tag=${category}&api_key=${apiKey}`);
            if (!response.ok) {
                throw new Error('Failed to fetch GIF');
            }
            const data = await response.json();
            const gifUrl = data.data.images.original.url;
            appendGIFToPage(gifUrl, category);
        } catch (error) {
            console.error('Error fetching GIF:', error.message);
        }
    } else {
        console.error('Category input cannot be empty');
    }
});

deleteAllButton.addEventListener('click', () => {
    gifContainer.innerHTML = '';
});

function appendGIFToPage(gifUrl, category) {
    const gifDiv = document.createElement('div');
    const gifImg = document.createElement('img');
    gifImg.src = gifUrl;
    gifImg.alt = 'GIF';
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        gifDiv.remove();
    });
    gifDiv.appendChild(gifImg);
    gifDiv.appendChild(deleteButton);
    gifContainer.appendChild(gifDiv);
}
