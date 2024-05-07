console.log('ver 2.3 ajax');
// init ajax
let xhr = new XMLHttpRequest();

//Select elements in DOM
let button = document.querySelector('#button');
let names = document.querySelector('#name');
let height = document.querySelector('#height');
let gender = document.querySelector('#gender');
let birthYear = document.querySelector('#birth-year');
let homeWorld = document.querySelector('#home-world');

//Get the info from API and catch for Errors
function getInfo (){
  //Call Loading Data
 	updateWithLoading();
  //Get Random people in the API between 1 and 88
 	let randomNumber = Math.floor((Math.random() * 88) + 1);
   let apiUrl = 'https://swapi.dev/api/people/' + randomNumber + '/';
   
  // ajax
  xhr.open('GET', apiUrl);
  xhr.responseType = 'json';
  xhr.send();
  xhr.onload = function(){
    if(xhr.status != 200){
      //console.log(`Error: ${xhr.status}: ${xht.statusText}`);
      updateInfoWithError();
      console.log('there was an error');
    }
    else{
      updateInfo(xhr.response);
    }
  }
  xhr.onerror = function() {
    updateInfoWithError();
    console.log('there was an error');
  };
 }

 //Display info on screen
 function updateInfo(resp){
   
  // ajax
  let url = new URL(resp.homeworld);
  url.protocol = 'https:'
  xhr.open('GET', url.href);

  xhr.responseType = 'json';
  xhr.send();
  xhr.onload = function(){
    if(xhr.status != 200){
      console.log('there was an error 2');
    }
    else{
      updateInfo2(xhr.response)
    }
  }
  xhr.onerror = function() {
    console.log('there was an error 3');
  };
 	console.log(resp.homeworld);
  console.log(resp.name);
 	console.log(names);

  names.innerText = resp.name;
  height.innerText = `Height: ${resp.height}`;
  gender.innerText = `Gender: ${resp.gender}`;
  birthYear.innerText = `Birth Year: ${resp.birth_year}`;
  // homeWorld.innerText = `Home World: ${planet}`;
}


//Display Home World
function updateInfo2(re){
 	// console.log(re.name)
 	// return re.name;
 	homeWorld.innerText = `Home World: ${re.name}`;
}

//Display when Error
function updateInfoWithError(){
  names.innerText = 'Oh No! That person isnt available.';
  height.innerText = ''
  gender.innerText = ''
  birthYear.innerText = ''
  homeWorld.innerText = ''
}

//Display when updating info (pending data)
function updateWithLoading(){
  //Icon link: https://fontawesome.com/how-to-use/on-the-web/styling/animating-icons
  names.innerHTML = '<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i> <p>Loading...</p>';
  height.innerText = ''
  gender.innerText = ''
  birthYear.innerText = ''
  homeWorld.innerText = ''
}

button.addEventListener('click', getInfo);
