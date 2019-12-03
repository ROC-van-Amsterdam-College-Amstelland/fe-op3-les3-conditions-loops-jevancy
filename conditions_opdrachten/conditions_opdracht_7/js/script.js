//javascript code

/*

Bedenk zelf een programma waarbij je met een if, else if, else statement verschillende waardes op het scherm laat zien.

A)	De output toon op het scherm via index.html.<br>
B)  Leg via comments in je javascript uit wat je doet, een comment maak je door // voor je code te zetten
C)  ik maak een rekenmachine die kan optellen en aftrekken


*/

var myOperator = "-";
var myNumber1 = prompt("geef aub een getal op?");
var myNumber2 = prompt("geef aub een getal op?");
var resultaat;

if( myOperator == "-" ){
    //hier komt code
    resultaat = Number(myNumber1) - Number(myNumber2);
    document.getElementById("resultaat").innerHTML = resultaat;

    // console.log("De operator is " + myOperator);

} else if ( myOperator == "*" ) {
    // console.log("De operator is -"); 
    resultaat = myNumber1 * myNumber2;
    document.getElementById("resultaat").innerHTML = resultaat;

}