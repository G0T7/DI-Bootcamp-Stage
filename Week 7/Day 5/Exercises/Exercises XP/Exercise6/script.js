const bankAmount = 5000; // Initial bank amount
const VAT = 0.17; // VAT percentage

const expenses = ["+200", "-100", "+146", "+167", "-2900"]; // Monthly expenses

// Function to calculate VAT for each expense
const calculateVAT = (amount) => {
    return amount * (1 + VAT);
};

// Modify expenses to include VAT
const modifiedExpenses = expenses.map((expense) => {
    const amount = parseInt(expense);
    return (amount > 0) ? `+${calculateVAT(amount).toFixed(2)}` : `${calculateVAT(amount).toFixed(2)}`;
});

// Calculate total expenses
const totalExpenses = modifiedExpenses.reduce((acc, curr) => {
    return acc + parseFloat(curr);
}, 0);

// Calculate bank balance at the end of the month
const bankBalance = bankAmount + totalExpenses;

console.log(`Current bank balance at the end of the month: ${bankBalance.toFixed(2)}`);
