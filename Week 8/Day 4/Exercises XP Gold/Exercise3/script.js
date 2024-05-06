const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(i); // Log the value of i
    console.log(num); // Log the current element
    alert(num);
    return num * 2;
});
