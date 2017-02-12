'use strict';
function obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek) {
	var oprocentowanieOpodatkowane = 0;
	if (podatek == true) {
		oprocentowanieOpodatkowane = oprocentowanie * (100 - 19) / 100;
	}
	else {
		oprocentowanieOpodatkowane = oprocentowanie;
	}
	var potega = iloscLat*okresKapitalizacji;
	var podstawa = 1+(oprocentowanieOpodatkowane/okresKapitalizacji);
	var kapital= wplata*Math.pow(podstawa,potega);
	var wynik = kapital;
	return wynik.toFixed(2);
}

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
	
	var kapital = obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek);
	
	document.getElementById('wynik').innerHTML=kapital;
}