import './style.css'
import api_key_gif from './config'


const option1 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f3fa2c6044mshae3cf4469cbbbb1p1e3826jsnf06f3309ecb1',
		'X-RapidAPI-Host': 'random-user.p.rapidapi.com'
	}
};

const option2 =  {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f3fa2c6044mshae3cf4469cbbbb1p1e3826jsnf06f3309ecb1',
		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
	}
};


const option3 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f3fa2c6044mshae3cf4469cbbbb1p1e3826jsnf06f3309ecb1',
		'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
	}
};

// let dadJokeURL = 'https://dad-jokes.p.rapidapi.com/random/joke';  
// let sportsURL = 'https://api-basketball.p.rapidapi.com/timezone'; 
// let randomUserURL = 'https://random-user.p.rapidapi.com/getuser'; 

const findCocktail = () => 
fetch('https://the-cocktail-db.p.rapidapi.com/search.php?s=vodka', option3)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

const findWeatherInfo = () => {
  fetch('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=35.5&lon=-78.5', option2)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
}

const findRandomPerson = () => {
  fetch('https://random-user.p.rapidapi.com/getuser', option1)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
}

function showResultsforDrink(){
 findCocktail(); 
}

function showResultsforWeather(){
  findWeatherInfo();  
}

function findRandoPerson(){
  findRandomPerson(); 
}







document.querySelector('#app').innerHTML = `
  <div>
    <h1>Welcome to the API Checker!</h1>
    <div class="card">
      <button class='dad-api' type="button" onClick=${showResultsforDrink()}>Show that Dad Joke API Works</button>
      <button class='basketball-api' type="button" onClick=${showResultsforWeather()}>Show that Basketball Info API Works</button>
      <button class='random-api' type="button" onClick=${findRandoPerson()}>Show that Random User API Works</button>
    </div>
    <p class="read-the-docs">
      After you press the button, open the console to check results
    </p>
  </div>
`