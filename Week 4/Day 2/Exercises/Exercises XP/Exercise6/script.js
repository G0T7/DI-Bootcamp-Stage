// Function to calculate hotel cost
function hotelCost() {
    let nights;
    do {
        nights = parseInt(prompt("Enter the number of nights you would like to stay in the hotel:"));
    } while (isNaN(nights));

    return nights * 140;
}

// Function to calculate plane ride cost
function planeRideCost() {
    let destination;
    do {
        destination = prompt("Enter your destination (London, Paris, or other):").toLowerCase();
    } while (!["london", "paris", "other"].includes(destination));

    switch (destination) {
        case "london":
            return 183;
        case "paris":
            return 220;
        default:
            return 300;
    }
}

// Function to calculate rental car cost
function rentalCarCost() {
    let days;
    do {
        days = parseInt(prompt("Enter the number of days you would like to rent the car:"));
    } while (isNaN(days));

    let cost = days * 40;
    if (days > 10) {
        cost *= 0.95; // Apply 5% discount for rentals longer than 10 days
    }
    return cost;
}

// Function to calculate total vacation cost
function totalVacationCost() {
    let hotel = hotelCost();
    let planeTicket = planeRideCost();
    let rentalCar = rentalCarCost();

    return hotel + planeTicket + rentalCar;
}

// Call the function totalVacationCost()
console.log("Total vacation cost:", totalVacationCost());
