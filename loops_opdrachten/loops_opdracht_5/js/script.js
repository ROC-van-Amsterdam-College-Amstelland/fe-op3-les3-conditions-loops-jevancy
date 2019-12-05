//javascript code

/*
Schrijf een programma dat loopt door de getallen 1 t/m 20 met een for- loop.

A)	Toon alleen de <b>even</b> getallen op het scherm via index.html. <br>
B)	Toon alleen de <b>oneven</b> getallen console.log() in je console

*/

for( var teller = 1 ;  teller <= 20  ; teller = teller + 1 ){
    console.log(teller);
    document.getElementById("resultaat").innerHTML += teller;
}
