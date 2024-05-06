//1.Evaluate these (ie True or False)

[2] === [2] 
{} === {}

//False

//2.What is, for each object below, the value of the property number and why?

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number)
console.log(object3.number)
console.log(object4.number)

//Output:
//4
//4
//5

class Animal {
    constructor(name, type, color) {
      this.name = name;
      this.type = type;
      this.color = color;
    }
  }
  
  class Mammal extends Animal {
    constructor(name, type, color) {
      super(name, type, color);
    }
  
    sound(sound) {
      return `Moooo I'm a ${this.type}, named ${this.name} and I'm ${this.color} and I ${sound}.`;
    }
  }
  
  const farmerCow = new Mammal("Lily", "cow", "brown and white");
  console.log(farmerCow.sound("moos"));
//Output:
//Moooo I'm a cow, named Lily and I'm brown and white and I moos.//  
