function reverseArray(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
      const temp = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = temp;
  }
  return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(reverseArray([1, 2])); // [2, 1]
console.log(reverseArray([])); // []
console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
