// criando variaveis do tipo array (VETOR)
// var numeros = [1, 2, 3, 4, 5];
// console.log(numeros); //imprime os dados do array
// console.table(numeros); //imprime em forma de tabela
// console.table(numeros[1]); //imprime o numero de indice 1
// console.log("O vetor tem:", numeros.length, "elementos");

var dinos = [
  "tiranossauro rex",
  "estegossauro",
  "anquilossauro",
  "titanossauro",
];
console.log(dinos); //imprime os dados
console.table(dinos); //imprimindo os dados em forma de tabela
console.log("o vetor dinos tem:", dinos.length, "elementos");

// adicionando eventos a um vetor existente
dinos.push("brontossauro"); //adiciona um elemento no final do vetor
console.table(dinos);
console.log("o vetor dinos tem:", dinos.length, "elementos");

dinos.unshift("triceratops"); // adiciona um elemento no incio do vetor
console.table(dinos);
console.log("o vetor dinos tem:", dinos.length, "elementos");

//obtendo um elemento com base no seu indice (posição)
console.log("1ª posição", dinos[0]);
console.log("3ª posição", dinos[2]);
console.log("20ª posição", dinos[19]); //quando nao temos o item apreseta erro(undefined)

//alterando elementos com base em seu indice (posição)
dinos[3] = "velociraptor";
console.table(dinos);

//removendo elementos do vetor
var dinos = [
  "triceratops",
  "tiranossauro rex",
  "estegossauro",
  "anquilossauro",
  "brontossauro",
];

dinos.pop(); //remove o ultimo elemento do array(vetor)
console.table(dinos);

dinos.shift(); // remove o primeiro elemento
console.table(dinos);

dinos.splice(1, 2); //remove o elemento de indice 1(a partir da posição 1, exclui 1 elemento)
console.table(dinos);

var dinos = [
  "triceratops",
  "tiranossauro rex",
  "estegossauro",
  "anquilossauro",
  "brontossauro",
  "ictiossauro",
  "pterodactilo",
  "espinossauro",
];

console.table(dinos);
var elementoprocurado = "pterodactilo";
var posicao = dinos.indexOf(elementoprocurado);
console.log(elementoprocurado, "esta no indice:", posicao);

elementoprocurado = "castellosauro";
posicao = dinos.indexOf(elementoprocurado);
console.log(elementoprocurado, "esta no indice", posicao);
console.log(
  "indexOf = -1 significa que o elemento não foi encontrado no vetor"
);

//excluindo elemento com base no seu nome
var elementoexcluir = "pterodactilo";
var posicao = dinos.indexOf(elementoexcluir);
dinos.splice(posicao, 1);
console.table(dinos);

//criando uma copia de um array(vetor)
var copia = dinos.slice();
console.table(copia);

//Criando array numericos
var numeros = [4, 3, 1, 9, 7, 2];
console.table(numeros);

// imprimindo os elementos das posicoes impares
console.log(numeros[1]);
console.log(numeros[3]);
console.log(numeros[5]);

//verificando se o array contem um item
console.log("contem 9:", numeros.includes(9));
var contem0 = numeros.includes(0);
console.log("contem 0:", contem0);

//ordenando elementos do vetor
numeros.sort();
console.table(numeros);

//invertendo a ordem dos itens
numeros.reverse();
console.table(numeros);

//alterando o valor de um elemento om base em sua posiçao
numeros[2] = 5;
console.table(numeros);

numeros[0] += 3;
console.table(numeros);
numeros[5] = numeros[0] + numeros[1];
console.table(numeros);

//criando arrays hibridos
var hibrido = [10, "pafuncio", 3.45, "zuleika", 7];
console.table(hibrido);

hibrido[1] = 9;
console.table(hibrido);

hibrido[0] = "tiburcio";
console.table(hibrido);

//CRIANDO UMA MATRIZ
var matriz = [
  [9, 0, 1],
  [7, 1, 2],
  [1, 3, 9],
];
console.table(matriz);

// obtendo elementos com base em seus indices
console.table("matriz[1,2] =", matriz[1][2]);
console.table("matriz[2,0] =", matriz[2][0]);

// alterando os valores de elementos com base em seus indices
matriz[1][2] = 20
matriz[2][0] = 30
console.table(matriz);