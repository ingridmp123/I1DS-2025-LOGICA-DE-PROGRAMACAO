// Criando variáveis com "var" (var nome_variavel = <valor>;) 
var nome = "Tibúrcio"; 
console.log("Meu nome é", nome); 
var idade = 23; 
console.log("Meu nome é", nome, ", e eu tenho ", idade, "anos"); 
idade = idade + 1; 
console.log("Meu nome é", nome, ", e agora eu tenho ", idade, "anos"); 
console.log("--------------------------------------------------")

// JAVA SCRIPT TRABALHA COM SISTEMAS CASE SENSITIVE (MAIUSCULA SÃO DIFERENTE DE MINUSCULAS)
console.log("crindo uma variavel Teste e tentando acessar como um testE")
let Teste = "variavel teste!";
//console.log(testE) - NÃO FUNCIONA
console.log(Teste)

// REGRAS PARA NOMEAR IDENTIFICADORES VARIAVEIS
//podem iniciar com 'A' - 'Z' , 'a' - 'z' , '_' ou '$' , nao pode começar com numero ou sinal 
let MinhaVariavel = 10
let outravariavel = 2.65;
const _minhaconstante = "uma constante qualquer"
var $minhavariavel = -5;

//VARIAVEIS LOGICAS (boolean)
var nome = "gustavo"
var rico = false;
var eprofessor = true;
console.log("nome =", nome, "| é professor?", eprofessor, "| é rico?", rico);
