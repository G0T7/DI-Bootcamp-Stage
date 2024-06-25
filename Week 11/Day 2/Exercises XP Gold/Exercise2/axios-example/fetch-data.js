const axios = require('axios');

async function fetchData() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const posts = response.data;

        posts.forEach(post => {
            console.log(post.title);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

module.exports = fetchData;
