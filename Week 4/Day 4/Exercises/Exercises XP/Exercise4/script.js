// Create an array of books
const allBooks = [
    {
      title: 'Book 1',
      author: 'Author 1',
      image: 'https://example.com/image1.jpg',
      alreadyRead: true
    },
    {
      title: 'Book 2',
      author: 'Author 2',
      image: 'https://example.com/image2.jpg',
      alreadyRead: false
    }
  ];
  
  // Get the div element
  const divElement = document.querySelector('.listBooks');
  
  // Create a table element
  const tableElement = document.createElement('table');
  
  // Loop through the array of books
  allBooks.forEach((book) => {
    // Create a table row element
    const trElement = document.createElement('tr');
  
    // Create a table data element for the book's title and author
    const tdTitleElement = document.createElement('td');
    tdTitleElement.textContent = book.title + ' written by ' + book.author;
  
    // Create a table data element for the book's image
    const tdImageElement = document.createElement('td');
    const imgElement = document.createElement('img');
    imgElement.src = book.image;
    imgElement.width = 100;
    tdImageElement.appendChild(imgElement);
  
    // Set the color of the book's details to red if it's already read
    if (book.alreadyRead) {
      tdTitleElement.style.color = 'red';
    }
  
    // Append the table data elements to the table row
    trElement.appendChild(tdTitleElement);
    trElement.appendChild(tdImageElement);
  
    // Append the table row to the table
    tableElement.appendChild(trElement);
  });
  
  // Append the table to the div
  divElement.appendChild(tableElement);