// Get the div element
const divElement = document.getElementById('navBar');

// Change the value of the id attribute from navBar to socialNetworkNavigation
divElement.setAttribute('id', 'socialNetworkNavigation');

// Get the ul element
const ulElement = divElement.firstElementChild;

// Create a new li element
const newLiElement = document.createElement('li');

// Create a new text node with “Logout” as its specified text
const newTextNode = document.createTextNode('Logout');

// Append the text node to the newly created list node (<li>)
newLiElement.appendChild(newTextNode);

// Finally, append this updated list node to the unordered list (<ul>)
ulElement.appendChild(newLiElement);

// Get the first and last <li> elements from their parent element (<ul>)
const firstLiElement = ulElement.firstElementChild;
const lastLiElement = ulElement.lastElementChild;

// Display the text of each link
console.log('First link text: ', firstLiElement.textContent);
console.log('Last link text: ', lastLiElement.textContent);