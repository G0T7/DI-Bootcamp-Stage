 // Retrieve the query parameters from the URL
 const urlParams = new URLSearchParams(window.location.search);
 const name = urlParams.get('name');
 const lastname = urlParams.get('lastname');

 // Display the sent data
 const displayData = document.getElementById('displayData');
 displayData.innerHTML = `Name: ${name}<br>Last Name: ${lastname}`;