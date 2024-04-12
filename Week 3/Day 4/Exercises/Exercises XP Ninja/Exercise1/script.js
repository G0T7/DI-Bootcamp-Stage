function findHalfAgeDate(year1, year2) {
    // Convert birth years to numbers if they are provided as strings
    year1 = Number(year1);
    year2 = Number(year2);

    // Calculate ages of the two people
    const currentYear = new Date().getFullYear();
    const age1 = currentYear - year1;
    const age2 = currentYear - year2;

    // Determine older and younger person
    let olderYear, youngerYear;
    if (age1 > age2) {
        olderYear = year1;
        youngerYear = year2;
    } else {
        olderYear = year2;
        youngerYear = year1;
    }

    // Calculate halfway age between the two people
    const halfwayAge = (age1 + age2) / 2;

    // Calculate birth year when the younger person is exactly half the age of the older person
    const halfwayAgeYear = currentYear - halfwayAge;

    return halfwayAgeYear;
}




// Example :
const year1 = "1980";
const year2 = "2000";
const halfwayAgeYear = findHalfAgeDate(year1, year2);
console.log("The date when the younger one is exactly half the age of the older is:", halfwayAgeYear);
