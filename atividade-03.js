
/*******************
 *                   Lista de exercícios 03
 *******************/
// 1. Crie um array de frutas com os seguintes elementos:
// Banana, Maçã, Pera, Uva, Morango.
// 2. Adicione Tangerina no final.
// 3. Adicione Goibada no início.
// 4. Exiba o conteúdo indíce 5.
// 5. Exclua o elemento uva.
// 6. Crie uma cópia do array apenas com os elementos com índices 2, 3 e 4.
var frutas = ["banana", "maça", "pera", "uva", "morango"];

console.table(frutas);
frutas.push("tangerina");
console.table(frutas);
frutas.unshift("goiaba");
console.table(frutas);

console.table(frutas[5]);

var elementoexcluir = "uva";
var posicao = frutas.indexOf(elementoexcluir);
frutas.splice(posicao, 1);
console.table(frutas);

var copia = frutas.slice(2, 5);
console.table(copia);
