/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */


/* let summa = 0;
let number = 0
for (let i = 0; i < 10; i++) {
    const Insertnumber = Number(prompt("Inserisci un numero"));
    console.log(Insertnumber);
    let thisNumber = summa + number;
    console.log(thisNumber);
    
    
}
console.log(summa); */

let summa = 0;

for (let i = 0; i < 10; i++) {
    const insertNumber = Number(prompt("Inserisci un numero"));
    console.log(insertNumber);
    
    summa = summa + insertNumber;
    
    
}
console.log(summa);
