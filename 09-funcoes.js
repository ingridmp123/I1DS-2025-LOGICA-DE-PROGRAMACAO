function somar2mais2() {
  return 2 + 2;
}
console.log(somar2mais2());

//criando um funcao que soma dois valores e retorna o resultado
function somar(val1, val2) {
  return val1 + val2;
}
console.log("5 + 3 =", somar(5, 3));
console.log("12 + 8 =", somar(12, 8));
console.log("6,5 + 2,12 =", somar(6.5, 2.12));

var v1 = 9;
var v2 = 6;
console.log("v1 + v2 =", somar(v1 + v2));

//criando uma função que escreve "bom dia"
function bomdia(nome) {
  console.log("Ola,", nome, "\nmuito bom dia para você!");
}

bomdia("gustavo");

//criando uma função que calcula e retorna o desconto em uma venda
function desconto(valor) {
  return valor * 0.05;
}
// console.log("O desconto do produto no valor de R$ 100,00 é R$", desconto(100));
var totalpedido = 300;
var totaldesconto = desconto(totalpedido);
var valorfinal = totalpedido - totaldesconto;

console.log("------------------------------------------");
console.log("Total do pedido: R$", totalpedido);
console.log("Total dos descontos: R$", totaldesconto);
console.log("valor liquido: R$", valorfinal);
console.log("------------------------------------------");

//criando uma funçã que apresenta pessoas
const apresentapessoas = (nomepessoa, idade, cidade) => {
  //"apresento" a vocês: "Nome_pessoa", que tem "XX" anos e mora em "cidade"
  console.log(
    "apresento a vocês:",
    nomepessoa,
    "que tem",
    idade,
    "anos e mora em",
    cidade
  );
};

apresentapessoas("zuleika", 19, "brotas");
apresentapessoas("pafuncio", 21, "jau");
apresentapessoas("epaminondas", 16, "barra bonita");
