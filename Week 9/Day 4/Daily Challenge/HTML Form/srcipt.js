document.getElementById('submitBtn').addEventListener('click', function() {
  // Retrieve form data
  const name = document.getElementById('name').value;
  const lastname = document.getElementById('lastname').value;

  // Create JSON object
  const data = {
      name: name,
      lastname: lastname
  };

  // Convert JSON object to string
  const jsonString = JSON.stringify(data);

  // Append JSON string to DOM
  const outputDiv = document.getElementById('output');
  outputDiv.textContent = jsonString;
});