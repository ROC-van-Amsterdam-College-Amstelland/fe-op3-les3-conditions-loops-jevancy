//javascript code

function checkSaldo() {
    var geldOpname = document.getElementById('geldOpname').value;

    alert(geldOpname);

    var bankSaldo = 1000; //begin banksaldo

    //berekening van geldopname
    var restTotaal = 1000 - geldOpname;

    //condtitie om te checke of het wel mogelijk is
    if(restTotaal < 25 ) {
        alert("Sorry, je hebt te weinig saldo!");
    }

}