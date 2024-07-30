/*Array sem o Primeiro e Último Elemento
Escreva um programa que imprima um array com todos os elementos de um
array original, exceto o primeiro e o último.*/

let numeros = []


for (let i = 0; i < 5; i++){
    numeros[i] = prompt ("Digite um número de 10 a 100:") 
}

numeros.shift()
numeros.pop()

console.log("Os números digitados, sem o primero e último foram:" , numeros)
