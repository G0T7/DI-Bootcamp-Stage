document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the h1 and log it to the console
    const h1Element = document.querySelector('h1');
    console.log(h1Element.textContent);

    // Remove the last paragraph in the article
    const article = document.getElementById('article');
    const paragraphs = article.querySelectorAll('p');
    if (paragraphs.length > 0) {
        const lastParagraph = paragraphs[paragraphs.length - 1];
        lastParagraph.remove();
    }

    // Change background color of h2 to red when clicked
    const h2Element = document.querySelector('h2');
    h2Element.addEventListener('click', () => {
        h2Element.style.backgroundColor = 'red';
    });

    // Hide the h3 when clicked
    const h3Element = document.querySelector('h3');
    h3Element.addEventListener('click', () => {
        h3Element.style.display = 'none';
    });

    // Add event listener to button to make all paragraphs bold when clicked
    const boldButton = document.getElementById('boldButton');
    boldButton.addEventListener('click', () => {
        paragraphs.forEach(paragraph => {
            paragraph.style.fontWeight = 'bold';
        });
    });

    // Bonus: Change font size of h1 on hover to random value (0-100px)
    h1Element.addEventListener('mouseover', () => {
        const randomSize = Math.floor(Math.random() * 101); // Random size between 0 and 100
        h1Element.style.fontSize = `${randomSize}px`;
    });

    // Bonus: Fade out the second paragraph on hover
    if (paragraphs.length > 1) {
        const secondParagraph = paragraphs[1];
        secondParagraph.addEventListener('mouseover', () => {
            secondParagraph.classList.add('fade-out');
        });
    }
});
