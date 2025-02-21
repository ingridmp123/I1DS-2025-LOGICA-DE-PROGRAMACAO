//LAÇO DE REPETIÇÃO - FOR

//O professor te colocou de castigo e te pediu para escrever mil vezes a frase "Eu vou prestar atenção nas aulas"
for (let i = 0; i < 1000; i++) {
  console.log("Eu vou prestar atenção nas aulas");
}

//escreva todos os numeros de 1 a 20 com o loop for
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

//mostre no console do sistema os numeros pares do 1 ao 20
for (let i = 2; i <= 20; i++) {
  i % 2 == 0 && console.log(i);
}

// dados um vetor, calcule e exiba o somatorio de seus elementos
var numeros = [5, 6, 8, 14, 0, 9, 7, 2];
console.log(numeros.length);
var soma = 0;
for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}
console.log("soma dos elementos:", soma);

//dado um vetor, calcule e exiba a quantidade de pares e impares
var numeros = [5, 6, 8, 14, 0, 6, 9, 7, 2];
var pares = 0;
var impares = 0;

for (let i = 0; i < numeros.length; i++) {
  numeros[i] % 2 == 0 ? pares++ : impares++;
}
console.log("total de pares:", pares);
console.log("total impares:", impares);

//dado um vetor, multiplique todos os seus elementos por 3 com o laco for
var numeros = [5, 6, 8, 14, 0, 9, 7, 2];
console.table(numeros);

for (let i = 0; i < numeros.length; i++) {
  numeros[i] *= 3;
}
console.table(numeros);

// dada auma matriz 2x3 mostre ao usuario todos os seus elementos com as respectivas posições
var matriz = [
  [8, 4, 1],
  [3, 7, 8],
];
console.table(matriz);
for (let linha = 0; linha < matriz.length; linha++) {
  for (let coluna = 0; coluna < matriz[0].length; coluna++) {
    // console.log("matriz[", linha, "][", coluna, "] =", matriz[linha][coluna]);
    console.log(Matriz[${linha}][${coluna}] = ${matriz [linha][coluna]}');
  }
}
