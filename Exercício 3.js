/*Divisão por Não Zero
Crie um programa que imprima o resultado da divisão de dois números,
apenas se o divisor não for zero.*/

let numeroUm = Number(prompt("Vamos fazer uma divisão! Digite o número dividendo:"));
let numeroDois = Number(prompt("Agora digite o divisor:"))

if (numeroDois !== 0){
   let resultado = numeroUm / numeroDois 
    console.log("O resultado da divisão é:" , resultado.toFixed(2))
} else {
    console.log("O divisor não pode ser zero, repita a operação.")
}
