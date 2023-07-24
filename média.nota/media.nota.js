var nota1 = prompt("digite aqui a primeira nota")
var nota2 = prompt("digite aqui a segunda nota")
var nota3 = prompt("digite aqui a terceira nota")
var mediaFinal = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3)) / 3

if (mediaFinal > 8) {
    alert("Sua media final é de: " + mediaFinal + " Parabéns pelo empenho!😍")
} else if (mediaFinal >= 6 || mediaFinal <= 8) {
    alert("Sua média final é de: " + mediaFinal + " Boa chegou lá!😎")
} else if (mediaFinal < 6) {
    alert("Sua média final é de: " + mediaFinal + " Infelizmente, foi reprovado!🥲")
}