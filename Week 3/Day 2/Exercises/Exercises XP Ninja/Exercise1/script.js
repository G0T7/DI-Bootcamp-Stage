// Prediction:
// 5 >= 1 - true, because 5 is greater than or equal to 1.
// 0 === 1 - false, because 0 is not strictly equal to 1 (different types and values).
// 4 <= 1 - false, because 4 is not less than or equal to 1.
// 1 != 1 - false, because 1 is equal to 1.
// "A" > "B" - false, because "A" comes before "B" in alphabetical order.
// "B" < "C" - true, because "B" comes before "C" in alphabetical order.
// "a" > "A" - true, because lowercase letters have higher Unicode values than uppercase letters.
// "b" < "A" - false, because lowercase letters have higher Unicode values than uppercase letters, so "b" is not less than "A".
// true === false - false, because true is not strictly equal to false.
// true != true - false, because true is equal to true.

// Actual Output:
/*
true
false
false
false
false
true
true
false
false
false
*/
