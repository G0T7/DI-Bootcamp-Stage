function repeat(str, n = 1) {
  let result = '';
  for (let i = 0; i < n; i++) {
      result += str;
  }
  return result;
}

console.log(repeat('Ha!', 3)); // Output: "Ha!Ha!Ha!"
