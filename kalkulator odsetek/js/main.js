function oblicz(event) {
	'use strict';
	event.preventDefault();
	var wplata = parseInt(document.getElementById('wplata').value);
	var iloscLat = parseInt(document.getElementById('lata').value);
	var okresKapitalizacji = parseInt(document.getElementById('okres').value);
	var oprocentowanie = parseInt(document.getElementById('oprocentowanie').value) / 100;
	if (document.getElementById('belka').checked) {
		var podatek = true;
	} else {
		var podatek = false;
	}
	
}

function obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek){
	var wynik = 0;
	return
};
// punkt 11