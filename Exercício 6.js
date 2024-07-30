/*Vogais em uma String - (dica: string.match)
Escreva um programa que imprima todas as vogais de uma string.*/

let frase = prompt("Digite uma frase com 10 palavras:")
let vogais = /[A,E,I,O,U]/gi;

console.log (frase)
console.log(frase.match(vogais))
