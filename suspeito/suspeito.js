// declarar as variaveis da fala
const fala1 = "Não sou eu!"
const fala2 = "Eu tentei te ajudar desde o ínicio!"
const fala3 = "já pensou que o monstro pode ser encontrado?"

// definir a quantidade de letras de cada fala
const num1 = fala1.length;
const num2 = fala2.length;
const num3 = fala3.length;

// validar qual fala tem mais letra e retornar no console o numero de letras
if (num1 > num2 && num1 > num3){
console.log ("Quantidade de letras = "+num1+" Essa é a frase do suspeito: "+fala1)
} else if (num2 > num1 && num2 > num3){
console.log ("Quantidade de letras = "+num2+" Essa é a frase do suspeito: "+fala2)
}else if (num3 > num1 && num2){
console.log ("Quantidade de letras = "+num3+" Essa é a frase do suspeito: "+fala3) 
}

