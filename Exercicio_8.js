/*Escreva um programa que imprima o último número de um array, apenas se o array tiver pelo menos dois elementos.*/
/*let array = [10, 20, 30]
let i = 0
i = array.length - 1

let resultado = array[i]
console.log(resultado)*/

let array = []
let i = 0
let numero;

do {
    numero = Number(prompt("Digite um número:"))
    array[i] = numero;
    i ++;
       
} while ( numero !== 0);


/*while (array[i] > 0){
    array[i] = Number(prompt("Digite um número:"))
    i ++;
}*/

/*while (i < array.length && array[i] > 0) {
    array[i] = Number(prompt("Digite um número:"));
    i++;
}
    */

if (array.length >= 2) {
    i = array.length - 1
    let resultado = array[i]
    console.log(resultado);
} else {
    console.log("Recarregue a página");  
}
