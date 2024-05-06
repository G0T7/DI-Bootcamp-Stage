//1.Modify the nested array array to the desired format [1, 2, 3, [4], [5]]:
const array = [[1],[2],[3],[[[4]]],[[[5]]]];
const modifiedArray = array.flat(Infinity);
console.log(modifiedArray); // Output: [1, 2, 3, [4], [5]]

//2.Modify the nested array greeting to the desired format ["Hello young grasshopper!","you are","learning fast!"]:
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const modifiedGreeting = greeting.map(subarray => subarray.join(' '));
console.log(modifiedGreeting); // Output: ["Hello young grasshopper!","you are","learning fast!"]

//3.Convert the greeting array to a string 'Hello young grasshopper! you are learning fast!':
const stringGreeting = modifiedGreeting.join(' ');
console.log(stringGreeting); // Output: 'Hello young grasshopper! you are learning fast!'

//4.Extract the trapped number 3 from the deeply nested array trapped:
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
const extractedNumber = trapped.flat(Infinity);
console.log(extractedNumber); // Output: [3]
