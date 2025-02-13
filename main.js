/* L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

const firstNumber = parseInt(prompt("Inserisci il primo numero"));
const secondNumber = parseInt(prompt("Inserisci il secondo numero"));

if (firstNumber > secondNumber) {
    console.log(firstNumber);
    
} else if (secondNumber > firstNumber) {
    console.log(secondNumber);
    
} else if (firstNumber == secondNumber){
    console.log("Sono uguali");
    
}