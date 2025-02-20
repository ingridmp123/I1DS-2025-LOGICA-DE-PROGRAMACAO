//OPERADORES LOGICOS
var souPobre = true;
console.log("----------------------------------")
console.log("sou pobre?", souPobre); 
console.log("negação de souPobre:", !souPobre)

var manha = true
var sono = true
console.log("---------------------------")
console.log("manha:", manha, "|  estou com sono?:", sono)

//Condicional simples
console.log("Operdor AND (E):", manha && sono);
console.log("Operador OR (OU):", manha || sono)

manha = false
console.log("---------------------------")
console.log("manha:", manha, "|  estou com sono?:", sono)

console.log("Operdor AND (E):", manha && sono);
console.log("Operador OR (OU):", manha || sono)

sono = false
console.log("---------------------------")
console.log("manha:", manha, "|  estou com sono?:", sono)

console.log("Operdor AND (E):", manha && sono);
console.log("Operador OR (OU):", manha || sono)
