// Get the table element
const table = document.body.firstElementChild;

// Loop through the table rows
for (let i = 0; i < table.rows.length; i++) {
  // Get the current row
  const row = table.rows[i];

  // Get the current cell
  const cell = row.cells[i];

  // Set the background color of the cell to red
  cell.style.backgroundColor = 'red';
}