'use strict';

var button = document.getElementById("submitButton"); //deklarujemy button jako zmienną

button.addEventListener('click', function (event) { //włączamy wykrywanie eventów dla buttona
	
	event.preventDefault(); //zapobiegamy odświeżaniu strony
	
	var formularzDzieci = document.getElementById('form').children; //tworzymy zmienną formularzDzieci, której nadajemy wartość kolekcji HTML jego childrenów
	
	for (var i = 0; i < formularzDzieci.length; i++) { // iterujemy po kolekcji
	
		if ((formularzDzieci[i].id == "name") || (formularzDzieci[i].id == "surname")) // warunek przy iterowaniu - jeśli napotkane id to name lub surname
		{
			
			console.log(formularzDzieci[i].value); // wyświetlamy value czyli to co wpisujemy w formie
	
		}
	}
});
	
