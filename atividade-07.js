// **************************************************
// LISTA EXERCICIOS
// **************************************************

var matriz = [
  [3, 5, 8],
  [1, 9, 2],
  [7, 1, 4],
];
console.table(matriz);
for (let linha = 0; linha < matriz.length; linha++) {
  for (let coluna = 0; coluna < matriz[0].length; coluna++) {
    linha == coluna &&
      console.log(`Matriz[${linha}][${coluna}]= ${matriz[linha][coluna]}`);
    {
    }
  }
}

var x = 4;
console.table(matriz);
console.table(matriz);
for (let linha = 0; linha < matriz.length; linha++) {
  for (let coluna = 0; coluna < matriz[0].length; coluna++) {
    matriz[linha][coluna] *= x;
  }
}
console.table(matriz);

//Faça um loop FOR onde apresente os numeros impares de 0 a 100
// não pode ser resolvido com conta ou resto de divisão
console.log("numeros impares de 0 a 100");
for (let i = 1; i <= 100; i += 2) {
  console.log(i);
}
console.log("--------------------------------------");
console.log("numeros pares de 0 a 100");
for (let i = 0; i <= 100; i += 2) {
  console.log(i);
}

