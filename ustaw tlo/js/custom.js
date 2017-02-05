'use strict';

var node = document.createElement("p");              

var textnode = document.createTextNode("Paragraf 2 = tutaj także ustawi się kolor");        

node.appendChild(textnode);                              

document.body.insertBefore(node, document.getElementsByTagName('p')[0].nextSibling);   


function wklejParagraf() {
	
	newElement.appendChild(newElementContent);
					   };

function ustaw_tlo(e) {

	document.getElementsByTagName('p')[0].style.backgroundColor = "red";
	document.getElementsByTagName('p')[1].style.background = "green";
	
}

