let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
  };
  
  //1. Prompting the user for their name
  let studentName = prompt("Please enter your name:");
  
  //2. Checking if the name is in the object
  if (studentName in guestList) {
      //2. If the name is found, log the name and country
      console.log(`Hi! I'm ${studentName}, and I'm from ${guestList[studentName]}.`);
  } else {
      //3.  If the name is not found, log that the user is a guest
      console.log("Hi! I'm a guest.");
  }
  