//javascript code

/*
Schrijf een programma dat loopt door de getallen 1 t/m 100. Toon alle getallen onder elkaar op het scherm. <br>
Bij een veelvoud van 3 wordt ook het woord <b>VET</b> getoond bij een veelvoud van 5 wordt het woord <b>COOL</b> getoond.<br>
Zoek op internet hoe je in code kan checken of iets een veelvoud van iets is.

<b>Bonus:</b> Bij een veelvoud van beide getallen worden de woorden samen getoond: <b>VET COOL</b>.
Hint: denk aan % en if statements


A)	Alle getallen toon je onder elkaar op het scherm via index.html. <br>
B)	Alle getallen toon je met behulp van console.log() in je console
*/

for (var teller = 1; teller <= 100; teller++) {
    

    if (teller % 3 == 0  &&  teller % 5 == 0   ) {
        document.getElementById("resultaat").innerHTML += "<div>VET COOL</div><br>";
    }

    else if (teller % 3 == 0   ) {
        document.getElementById("resultaat").innerHTML += "<div>VET</div><br>";
        
    }
    else if (teller % 5 == 0   ) {
        document.getElementById("resultaat").innerHTML += "<div>COOL</div><br>";
    }

    else {
        document.getElementById("resultaat").innerHTML += teller + "<br>";
    }


}
