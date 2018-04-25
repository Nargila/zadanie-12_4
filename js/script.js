$(function(){
	console.log('DOM loaded - you can have fun');

	var url = 'http://api.icndb.com/jokes/random'; //Adres losowego dowcipu
	var button = document.getElementById('get-joke');
	button.addEventListener('click', function() {  //Nasłuchiwanie aby po każdym kliknięciu na przycisk pobierał się losowy dowcip
		getJoke();
	}); 

	var paragraph = document.getElementById('joke'); //przypisanie zmiennej parapgraph jako p o klasie joke

	function getJoke() {
	  var xhr = new XMLHttpRequest();
	  xhr.open('GET', url);
	  xhr.addEventListener('load', function(){
	  var response = JSON.parse(xhr.response);
	  paragraph.innerHTML = response.value.joke;
	  });
	  xhr.send();
	}

	getJoke();
}); //Koniec kodu