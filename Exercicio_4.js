/*Array em Ordem Inversa
Escreva um programa que imprima um array em ordem inversa.*/

let frutas = []
let i = 0

while (i < 5) {
    frutas[i] = prompt("Digite as frutas na ordem que você mais gosta, uma por vez:")
i++
}

console.log("As frutas que você menos gosta são:" , frutas.reverse());
