/*Multiplicação com Número Par
Crie um programa que imprima o resultado da multiplicação de dois números,
apenas se pelo menos um dos números for par.*/

let numeroUm = Number(prompt("Digite o primeiro número:"));
let numeroDois = Number (prompt("Digite o segundo número:"));

if (numeroUm % 2 === 0 || numeroDois % 2 === 0)  {
    console.log("O resultado da multiplicação é:" , (numeroUm * numeroDois))
} else {
    console.log("Não é possível imprimir um resultado pois nenhum dos números é par.")
}
