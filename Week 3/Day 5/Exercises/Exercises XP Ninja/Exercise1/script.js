// Creating two objects to hold person's details
let person1 = {
    fullName: "John Doe",
    mass: 70, // in kilograms
    height: 1.75, // in meters
    calculateBMI: function() {
      return this.mass / (this.height * this.height);
    }
  };
  
  let person2 = {
    fullName: "Jane Smith",
    mass: 65, // in kilograms
    height: 1.65, // in meters
    calculateBMI: function() {
      return this.mass / (this.height * this.height);
    }
  };
  
  // Function to compare the BMI of both objects
  function compareBMI(person1, person2) {
    let person1BMI = person1.calculateBMI();
    let person2BMI = person2.calculateBMI();
  
    if (person1BMI > person2BMI) {
      return person1.fullName + " has the largest BMI.";
    } else if (person1BMI < person2BMI) {
      return person2.fullName + " has the largest BMI.";
    } else {
      return "Both have the same BMI.";
    }
  }
  
  // Displaying the result
  console.log(compareBMI(person1, person2));
  