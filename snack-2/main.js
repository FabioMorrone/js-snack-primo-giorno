/*
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/

const parola = (prompt("inserire parola"));
const parola2 = (prompt("inserire parola"));
console.log(parola,parola2);

if (parola.length > parola2.length){
console.log (`la parola: ${parola} è più corta della parola ${parola2}`);
} else if (parola.length < parola2.length){
    console.log (`la parola: ${parola2} è più lunga della parola ${parola})`);
}
