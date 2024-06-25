function calculateTip() {
    // Fetch input values from the DOM
    const billAmount = parseFloat(document.getElementById('billAmt').value);
    const serviceQuality = parseFloat(document.getElementById('serviceQual').value);
    let numberOfPeople = parseInt(document.getElementById('numOfPeople').value);

    // Check if serviceQuality or billAmount is missing or invalid
    if (serviceQuality === 0 || isNaN(billAmount)) {
        alert('Please enter values for Bill Amount and Service Quality');
        return; // Exit the function early
    }

    // Check if numberOfPeople is missing or invalid
    if (isNaN(numberOfPeople) || numberOfPeople < 1) {
        numberOfPeople = 1; // Set default value to 1 person
        document.getElementById('each').style.display = 'none'; // Hide 'each' label
    } else {
        document.getElementById('each').style.display = 'inline'; // Show 'each' label
    }

    // Calculate the total tip per person
    const total = (billAmount * serviceQuality) / numberOfPeople;

    // Display the calculated tip in the DOM
    const tipElement = document.getElementById('tip');
    tipElement.textContent = total.toFixed(2); // Display total tip rounded to 2 decimal places

    // Display the totalTip section
    const totalTipElement = document.getElementById('totalTip');
    totalTipElement.style.display = 'block';
}

// Hide the totalTip section initially
document.getElementById('totalTip').style.display = 'none';

// Attach event listener to the 'Calculate' button using onclick attribute
const calculateButton = document.getElementById('calculate');
calculateButton.onclick = calculateTip;
