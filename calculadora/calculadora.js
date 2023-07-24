var numero1 = prompt ("digite aqui um número")
var numero2 = prompt ("digite um segundo número")
var operação = prompt ("Digite aqui qual operação deseja realizar")

if (operação == "+" || operação == "soma" || operação == "adição"){
let resultado = parseInt (numero1) + parseInt (numero2)
alert (resultado)
}else if (operação == "-" || operação == "subtração" || operação == "menos"){
let resultado = parseInt (numero1) - parseInt (numero2)
alert (resultado)
}else if (operação == "*" || operação == "multiplicação" || operação == "vezes"){
let resultado = parseInt (numero1) * parseInt(numero2)
alert (resultado)
}else if (operação == "/" || operação == "divisão"){
let resultado = parseInt (numero1) / parseInt (numero2)
alert (resultado)
}