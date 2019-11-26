//javascript code

/*
Schrijf een programma dat loopt door de getallen 1 t/m 5 met een for-loop.

A)	Alle getallen toon je onder elkaar op het scherm via index.html. <br>
B)	Alle getallen toon je met behulp van console.log() in je console


for(statement 1; statement 2; statement 3) {

}
teller++
teller = teller + 1;
teller += 1;
*/

for (var teller = 1; teller <= 5; teller++) {
    console.log(teller);
    document.getElementById("resultaat").innerHTML += teller;
}