const apiKey = '00bef0b4c56eef106f90a3a7';
const apiUrl = 'https://api.exchangerate-api.com/v4/latest/';

const amountInput = document.getElementById('amount-input');
const fromCurrencySelect = document.getElementById('from-currency-select');
const toCurrencySelect = document.getElementById('to-currency-select');
const switchButton = document.getElementById('switch-button');
const resultDiv = document.getElementById('result');

// Function to fetch supported currencies and populate dropdowns
async function fetchCurrencies() {
    try {
        const response = await fetch(apiUrl + apiKey);
        if (!response.ok) {
            throw new Error('Failed to fetch supported currencies');
        }
        const data = await response.json();
        const currencies = Object.keys(data.rates);
        populateDropdowns(currencies);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Function to populate currency dropdowns
function populateDropdowns(currencies) {
    currencies.forEach(currency => {
        const option1 = document.createElement('option');
        option1.value = currency;
        option1.textContent = currency;
        fromCurrencySelect.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = currency;
        option2.textContent = currency;
        toCurrencySelect.appendChild(option2);
    });
}

// Function to perform currency conversion
async function convertCurrency(amount, fromCurrency, toCurrency) {
    try {
        const response = await fetch(`${apiUrl}${fromCurrency}?base=${fromCurrency}&symbols=${toCurrency}`);
        if (!response.ok) {
            throw new Error('Failed to fetch conversion rate');
        }
        const data = await response.json();
        const rate = data.rates[toCurrency];
        const convertedAmount = amount * rate;
        displayResult(convertedAmount);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Function to display conversion result
function displayResult(convertedAmount) {
    resultDiv.textContent = `Converted Amount: ${convertedAmount.toFixed(2)}`;
}

// Event listener for form submission
document.getElementById('converter-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const amount = parseFloat(amountInput.value);
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;
    convertCurrency(amount, fromCurrency, toCurrency);
});

// Event listener for switch button
switchButton.addEventListener('click', function () {
    const temp = fromCurrencySelect.value;
    fromCurrencySelect.value = toCurrencySelect.value;
    toCurrencySelect.value = temp;
});

// Fetch supported currencies when the page loads
window.addEventListener('load', fetchCurrencies);
