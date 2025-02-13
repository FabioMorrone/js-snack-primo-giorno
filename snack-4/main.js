/* Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

const numero = []

for (let i = 0; i < 6; i++){
    const theNumero = Number(prompt("inserire numero"))
    console.log(theNumero);
if (theNumero % 2 !== 0){
    numero.push(theNumero)
}
}

console.log(numero);
