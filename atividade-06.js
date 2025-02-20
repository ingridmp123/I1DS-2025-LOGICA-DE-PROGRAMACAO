//*********************************************************
//                Lista de exercicios 06
/********************************************************** */
/*
crie uma função que receba a idade de uma pessoa e retorne uma frase dizend0 se ela pode votar no brasil */

var nome = "diogo";
var idade = 19;
var resultado = idade <= 16 ? "Não pode votar!" : "Deve, voto obrigatório!";
console.log("nome:", nome, "\nidade:", idade, "\npode votar?", resultado);

console.log("************************************************************");

var nome = "robson";
var idade = 15;
var resultado = idade <= 16 ? "Não pode votar!" : "Deve, voto obrigatório!";
console.log("nome:", nome, "\nidade:", idade, "\npode votar?", resultado);

console.log("************************************************************");

var nome = "Pedro";
var idade = 65;
var resultado = idade <= 16 ? "Não pode votar!" : "Deve, voto obrigatório!";
console.log("nome:", nome, "\nidade:", idade, "\npode votar?", resultado);

console.log("************************************************************");
const podevotar = (idade) => {
  //isso é uma função
  if (idade < 16) {
    return "você não pode votar";
  } else if (idade >= 18 && idade < 70) {
    return "você pode votar";
  } else {
    return "seu voto é facultativo";
  }
};
var nome = ["ygona", "batata", "fernanda", "cristinne"];
console.log("Ola", nome[0], "você tem 16 anos e", podevotar(16));
console.log("Ola", nome[1], "você tem 22 anos e", podevotar(22));
console.log("Ola", nome[2], "você tem 70 anos e", podevotar(70));
console.log("Ola", nome[3], "você tem 17 anos e", podevotar(12));
