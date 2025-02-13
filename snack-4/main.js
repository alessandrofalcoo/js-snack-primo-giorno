/* Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */

let empty = []

for (let i = 0; i < 6; i++) {
    let userNumb = Number(prompt("Inserisci un numero"));
    console.log(userNumb);
    
    if (userNumb % 2 !== 0) {
        empty.push(userNumb)
    }
}
console.log(empty);


