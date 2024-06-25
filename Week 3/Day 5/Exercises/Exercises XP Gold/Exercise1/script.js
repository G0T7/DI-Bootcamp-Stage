// Loop through the array above and determine whether or not each number is divisible by three.
// Each time you loop console.log true or false.

let numbers = [123, 8409, 100053, 333333333, 7];

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    const isDivisibleByThree = number % 3 === 0;
    console.log(isDivisibleByThree);
}
