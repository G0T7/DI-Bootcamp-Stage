// shop.js

const products = require('./products');

function findProductByName(name) {
  return products.find(product => product.name === name);
}

// Testing the function with different product names
console.log(findProductByName('Product 1'));
console.log(findProductByName('Product 2'));
console.log(findProductByName('Product 3'));
