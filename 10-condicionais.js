// condicional simples com IF
var anonascimento = 2003;

if (anonascimento > 2003) {
  console.log("A pessoa nasceu depois de 2003");
}

if (anonascimento < 2003) {
  ("A pessoa nasceu antes de 2003");
}

if (anonascimento == 2003) {
  console.log("A pessoa nasceu em 2003");
}

// condições simples com if-else
var anonascimento = 2005;
if (anonascimento > 2000) {
  console.log("a pessoa nasceu depois de 2000.");
} else {
  console.log("A pessoa nasceu em 2000 ou antes");
}

// condições compostas com IF
const login = "admin";
const senha = "12345";

var loginuser = "admin";
var senhauser = "12345";

if (loginuser == login && senhauser == senha) {
  console.log("acesso permitido!");
} else {
  console.log("acesso negado!");
}

// desvio condicional aninhado - IF-ELSE-IF-ELSE
var semaforo = "vermelho";

if (semaforo == "verde") {
  console.log("Siga");
} else if (semaforo == "amarelo") {
  console.log("Atenção");
} else {
  console.log("Pare");
}

//desvio condicional IF com bloco de comandos
var idade = 18;

if (idade <= 18) {
  console.log("Entrei no if...");
  idade++;
  console.log("Incrementei a idade...");
  console.log("a nova idade é", idade);
  console.log("Agora estou saindo do bloco if");
}
console.log("terminei");

//Criando variaveis locais com "let" (só existe dentro do bloco onde foram criados)
var mes = "agosto";
var dia = 15;

if (dia == 15 && mes == "agosto") {
  let mensagem = "hoje é dia 15 de agosto";
  console.log(mensagem);
}
console.log("Tentando acessar a variavel local fora do bloco, vai dar erro");
//console.log(mensgaem)

//criando uma função com desvio condicional IF
const desconto = (valorcompra) => {
  let desconto = 0;

  if (valorcompra >= 1000) {
    desconto = (valorcompra * 12) / 100;
  }

  return desconto;
};

var totalcompra = 950;
console.log(
  "Valor total da compra R$",
  totalcompra,
  "::: desconto R$",
  desconto(totalcompra)
);
var totalcompra = 1800;
console.log(
  "Valor total da compra R$",
  totalcompra,
  "::: Desconto R$",
  desconto(totalcompra)
);

// desvio condicional if inline (ternário)
//condiçao ? expressao_se_verdadeira | : expressão_se_falso
var preco = 500;
var resultado = preco <= 100 ? "ta barato" : "vish ta muito caro";
// o operador acima é o mesmo que escrever:
// if(preço <= 100){
//   resultado = "ta barato"
// }else{
//   resultado = "vish ta muito caro"
// }
console.log("Preço: R$", preco, "-", resultado);

//if ternario com somente uma expressão
//condição && expressão
var logado = false;
logado && console.log("usuario esta logado");
!logado && console.log("usuario NÃO esta logado");

//DESVIO CONDICIONAL - SWITCH CASE
console.log(
  "------------------------------SWTICH CASE-----------------------------------"
);
switch (1) {
  case 1:
    console.log("o usuario digitou o numero 1");
    break;

  default:
    console.log("o usuario digitou um numero diferente de 1");
    break;
}
//Menu de  seleção
var menuSelecionado = "Contato";

switch (menuSelecionado) {
  case "Home":
    console.log("Você clicou no link 'Home'!");
    break;

  case "Quem somos":
    console.log("Você clicou no link 'Quem somos'");
    break;

  case "Contato":
    console.log("Você clicou no link 'Contato'!");
    break;

  default:
    console.log("Opção inválida no link 'Contato'");
    break;
}

// varias opções com o mesmo case - switch case
var mes = 15;
switch (mes) {
  case 1:
  case 2:
  case 3:
    console.log("primeiro trimestre");
    break;
  case 4:
  case 5:
  case 6:
    console.log("segundo trimestre");
    break;
  case 7:
  case 8:
  case 9:
    console.log("terceiro trimestre");
    break;
  case 10:
  case 11:
  case 12:
    console.log("quarto trimestre");
    break;
  default:
    console.log("invalido");
}
