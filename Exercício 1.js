/*Soma de Números Positivos
Crie um programa que imprima o resultado da soma de dois números, apenas
se os dois números forem positivos.*/

let numeroUm
let numeroDois

numeroUm = Number(prompt("Digite o primeiro número:"));
numeroDois = Number(prompt("Digite o segundo número:"));

if (numeroUm >= 0 && numeroDois >= 0) {
    console.log ("O resultado da soma dos números é:" , numeroUm + numeroDois)
} else {
    console.log ("Digite somente números positivos.")
}
