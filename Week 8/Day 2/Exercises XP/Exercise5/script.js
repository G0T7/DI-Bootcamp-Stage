// Part I
function makeJuice(size) {
    function addIngredients(ingredient1, ingredient2, ingredient3) {
        document.getElementById('juice').innerText = `The client wants a ${size} juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}.`;
    }
    addIngredients('apple', 'orange', 'banana');
}

makeJuice('medium');

// Part II
function makeJuice(size) {
    const ingredients = [];

    function addIngredients(ingredient1, ingredient2, ingredient3) {
        ingredients.push(ingredient1, ingredient2, ingredient3);
    }

    function displayJuice() {
        document.getElementById('juice').innerText = `The client wants a ${size} juice, containing ${ingredients.join(', ')}.`;
    }

    addIngredients('apple', 'orange', 'banana');
    addIngredients('strawberry', 'kiwi', 'pineapple');
    displayJuice();
}

makeJuice('large');

