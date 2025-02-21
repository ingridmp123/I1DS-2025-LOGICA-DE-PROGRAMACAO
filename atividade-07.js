
var matriz = [
  [3, 5, 8],
  [1, 9, 2],
  [7, 1, 4],
];
console.table(matriz);
for (let linha = 0; linha < matriz.length; linha++) {
    for (let coluna = 0; coluna < matriz[0].length; coluna++) {
        for (let diagonal = 0; diagonal < matriz[0][1][2].length; diagonal++) {
      console.log(`Matriz[${linha}][${coluna}]= ${matriz [linha][coluna]}`);{
        console.log(`diagonal[${diagonal}]`)
      }
    }
}
}

