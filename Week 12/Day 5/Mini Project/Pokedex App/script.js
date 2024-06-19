//API:https://pokeapi.co/



let previous = document.getElementById("previous");

let next = document.getElementById("next");

let info = 0;

let prevInfo;

let pokemon_Image;

let text;

let idNumber = 0;

let size;

let weight;

let pokemonType;

const getData = async () => {
  loading();
  try {
    i = Math.floor((Math.random() * 807) + 1);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}//`);
    const data = await response.json();
    console.log(data)
    info = data;
    console.log(info.id);
    const name = await data.name;
    const height = await data.height;
    const weight = await data.weight;
    const id = await data.id;
    const type = await data.types[0].type.name;
    let pokemonImage = await data.sprites.front_default;

    console.log(pokemonImage);
    pokemon_Image = document.getElementById('pokemon_Image');
    pokemon_Image.setAttribute('src', pokemonImage);
    pokemon_Image.removeAttribute("hidden");
      text = document.getElementById('name');
    text.innerText = name[0].toUpperCase() +
      name.slice(1);
    size = document.getElementById('height');
    size.innerText = `Height: ${height}cm`;
    weight = document.getElementById('weight');
    weight.innerText = `Weight: ${weight}gr`;
    idNumber = document.getElementById('id');
    idNumber.innerText = `Pokemon n° ${id}`;
    pokemonType = document.getElementById('type');
    pokemonType.innerText = 'Type:' + ' ' + type[0].toUpperCase() +
      type.slice(1);
    document.getElementById("loadingImage").setAttribute("hidden", "true");
    var loadingMessage = document.getElementById('load');
    loadingMessage.style.display = "none";

  }
  catch (error) {
    var errorMessage = document.getElementById('name');
    errorMessage.style.fontSize = "26px";
    errorMessage.style.marginTop = "30px";
    errorMessage.innerText = `Oh no! That Pokemon isn't available...`;
  }
};


const loading = function () {
  var text = document.getElementById('name');
  text.innerText = "";
  var size = document.getElementById('height');
  size.innerText = "";
  var pokemon_weight = document.getElementById('weight');
  pokemon_weight.innerText = "";
  var pokemon_id = document.getElementById('id');
  pokemon_id.innerText = "";
  pokemonType = document.getElementById('type');
  pokemonType.innerText = "";
  var loadingMessage = document.getElementById('load');
  loadingMessage.innerText = 'Loading...';
  loadingMessage.style.display = "block";
  loadingMessage.style.marginTop = "150px";
  var loadingImage = document.getElementById('loadingImage');
  loadingImage.removeAttribute("hidden");
  pokemon_Image = document.getElementById('pokemon_Image');
  pokemon_Image.setAttribute('hidden', "true");
}




const prevData = async () => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${--info.id}/`);
  const data = await response.json();
  console.log(data);
  info = data;
  console.log(info.id);
  console.log(info);
  let pokemonImage = info.sprites.front_default;
  console.log(pokemonImage);
  pokemon_Image = document.getElementById('pokemon_Image');
  pokemon_Image.setAttribute('src', pokemonImage);
  text.innerText = info.name[0].toUpperCase() +
      info.name.slice(1);
  idNumber.innerText = `Pokemon n° ${info.id}`;
  size.innerText = `Height: ${info.height}cm`;
  weight.innerText = `Weight: ${info.weight}gr`;
  pokemonType.innerText = 'Type:' + ' ' + info.types[0].type.name;
}
const nextData = async () => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${++info.id}/`);
  const data = await response.json();
  console.log(data);
  info = data;
  console.log(info.id);
  console.log(info);
  let pokemonImage = info.sprites.front_default;
  console.log(pokemonImage);
  pokemon_Image = document.getElementById('pokemon_Image');
  pokemon_Image.setAttribute('src', pokemonImage);
  text.innerText = info.name[0].toUpperCase() +
      info.name.slice(1);
  idNumber.innerText = `Pokemon n° ${info.id}`;
  size.innerText = `Height: ${info.height}cm`;
  weight.innerText = `Weight: ${info.weight}gr`;
  pokemonType.innerText = 'Type:' + ' ' + info.types[0].type.name;


}


