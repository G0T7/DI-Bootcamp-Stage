const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)

//Prediction//
//5 + 12 = 17//