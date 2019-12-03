//javascript code

/*


Maak een programma die werkt als een simpele rekenmachine: Als de variabele myOperator een * is dan moeten de varaibelen myNumber1 en myNumber2 met elkaar worden vermenigvuldigd, Als de variabele myOperator een / is moeten de varaibelen myNumber1 en myNumber2 door elkaar gedeeld worden.

A)	Toon de som en de uitkomst op scherm via index.html. Dit moet er uitzien als (natuurlijk wel met je eigen nummers): <br>
<b>De uitkomst van de som 10*10 = 100 of De uitkomst van de som 10/2=5 </b><br>

*/

var myOperator = "*";
var myNumber1 = prompt("geef aub een getal op?");
var myNumber2 = prompt("geef aub een getal op?");
var resultaat;

if( myOperator == "*" ){
    //hier komt code
    resultaat = Number(myNumber1) * Number(myNumber2);
    document.getElementById("resultaat").innerHTML = resultaat;

    // console.log("De operator is " + myOperator);

} else if ( myOperator == "/" ) {
    // console.log("De operator is -"); 
    resultaat = myNumber1 / myNumber2;
    document.getElementById("resultaat").innerHTML = resultaat;

}