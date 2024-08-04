/*Escreva um programa que imprima todas as consoantes de uma string.*/

let frase = prompt("Escreva uma frase:")
let consoantes = /[B,C, D, F, G, H, J, K, L, M, N, P, Q, R, S, T, V, X, Z, W, Y]/gi;

console.log(frase)
console.log (frase.match(consoantes))