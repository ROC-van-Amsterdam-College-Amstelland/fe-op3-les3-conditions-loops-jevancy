//javascript code

/*
Schrijf een programma dat afloopt van
20 tot 0 met behulp van een for-loop.

A)	Alle getallen toon je onder elkaar op het scherm via index.html. <br>
B)	Alle getallen toon je met behulp van console.log() in je console

for(statement 1; statement 2; statement 3) {

}
teller++
teller = teller + 1;
teller += 1;
*/

for (var teller = 1; teller <= 20; teller++) {
    console.log(teller);
    document.getElementById("resultaat").innerHTML += teller;
}