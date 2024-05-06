const menu = [
    {
      type : "starter",
      name : "Houmous with Pita"
    },
    {
      type : "starter",
      name : "Vegetable Soup with Houmous peas"
    },
    {
      type : "dessert",
      name : "Chocolate Cake"
    }
  ];
  
  // Check if at least one element in the menu array is a dessert
  const hasDessert = menu.some(item => item.type === 'dessert');
  
  // Check if all the elements in the array are starters
  const allStarters = menu.every(item => item.type === 'starter');
  
  // Check if there is at least one element in the array that is a main course
  const hasMainCourse = menu.some(item => item.type === 'main');
  if (!hasMainCourse) {
    menu.push({ type: 'main', name: 'Grilled Salmon' });
  }
  
  const vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes"];
  
  // Add a key “vegetarian” (a boolean) to the menu array
  menu.forEach(item => {
    item.vegetarian = vegetarian.some(veg => item.name.toLowerCase().includes(veg));
  });
  
  console.log('Is there a dessert?', hasDessert);
  console.log('Are all items starters?', allStarters);
  console.log('Updated Menu:', menu);
  