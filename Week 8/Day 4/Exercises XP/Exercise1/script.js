//1.
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];
const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
//['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']//

//2.
const country = "USA";
console.log([...country]);
//['U', 'S', 'A']//

//3.Bonus
let newArray = [...[,,]];
console.log(newArray);
//[undefined, undefined]//


