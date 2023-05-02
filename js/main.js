//Generiamo 5 numeri pseudocasuali
const randomNumbers = [];

while( randomNumbers.length < 5 ) {

    const numero = getRandomNumber(1, 100);

    if( randomNumbers.includes(numero) == false ) {
        randomNumbers.push( numero );
    }

}

console.log("Numeri Casuali", randomNumbers);

//Scrivi i numeri in document
document.getElementById("numeri").innerText = randomNumbers;

//Nasconde i numeri
setTimeout(nascondiNumeri, 3 * 1000);

//Chiede i numeri all'utente
setTimeout(function() {

    const numeriUtente = chiediNumeri();
    console.log("Numeri utente: ", numeriUtente);

    const numeriIndovinati = confrontaNumeri(randomNumbers, numeriUtente);

    setInnerTextByID("messaggio", "Hai indovinato i seguenti numeri");
    setInnerTextByID("numeri", numeriIndovinati);

}, 4 * 1000);

/********************** FUNZIONI DI PAGINA **************************/

//Nasconde i numeri dal DOM e aggiorna il messaggio
function nascondiNumeri() {
    setInnerTextByID("messaggio", "Inserisci i 5 numeri che hai appena visto");
    setInnerTextByID("numeri", "");
}

//Chiede all'utente di inserire i numeri
function chiediNumeri() {
    
    const numeriUtente = [];

    while(numeriUtente.length < 5) {

        const numeroDaInserire = numeriUtente.length + 1;
        const numero = parseInt( prompt(`Inserisci il ${numeroDaInserire}° numero` ) );

        if( numeriUtente.includes(numero)==false && numero>0 ) {
            numeriUtente.push(numero);
        }

    }

    return numeriUtente;
    
}

/********************** FUNZIONI GENERICHE **************************/

//Restituisce un numero casuale compreso tra min e max
function getRandomNumber(min, max) {
    return Math.floor( Math.random() * (max - min +1) + min );
}

//Cambia l'innerText di un elemento "elem" con il valore "contenuto"
function setInnerTextByID(elemId, contenuto) {
    document.getElementById(elemId).innerText = contenuto;
}

//Confronta due array e restituisce quali numeri sono uguali
function confrontaNumeri(randomNumbers, userNumbers) {

    const indovinati = [];
    
    for (let i = 0; i < randomNumbers.length; i++) {
        const currentNumber = randomNumbers[i];
        
        // Controlliamo che il numero esista anche nell'altro array (in qualunque posizione)
        if(userNumbers.includes(currentNumber)) {
            indovinati.push(currentNumber);
        }

        // Se invece volessimo controllare che il numero sia presente nell'altro array (nella stessa posizione)
        // if( randomNumbers[i] == userNumbers[i] ) {}

    }

    return indovinati;
}