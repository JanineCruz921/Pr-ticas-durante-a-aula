var paginaInicial = document.querySelector(".paginaInicial")
var primeiraPagina = document.querySelector(".primeiraPagina")
var paginaCalculo = document.querySelector(".paginaCalculo")
var paginaResultado = document.querySelector(".paginaResultado")

function calculoAumentoSalarial() {
    var salario = document.querySelector("#inputUsuario").value
    var NovoSalario = "";

    if (salario <= 280) {
        let NovoSalario = (20 / 100 * parseInt(salario)) + parseInt(salario)
        paginaResultado.innerHTML = ("Seu salário anterior era de = R$" + salario +
            ". Seu percentual de aumento é de 20%. Seu novo Salário é de = R$" + NovoSalario)
            var novoBotaoRecalcular = document.createElement("button")
            var novoBotaoRetornar = document.createElement("button")
            novoBotaoRecalcular.innerText = "Recalcular meu ajuste salárial"
            novoBotaoRetornar.innerText = "Voltar para o ínicio"
            novoBotaoRecalcular.addEventListener("click", trocaDePagina2)
            novoBotaoRecalcular.addEventListener("click", limparInput)
            novoBotaoRetornar.addEventListener("click", trocaDePagina0)
            novoBotaoRetornar.addEventListener("click", limparInput)
            paginaResultado.append(novoBotaoRecalcular)
            paginaResultado.append(novoBotaoRetornar)

    } else if (salario > 280 && salario < 700) {
        let NovoSalario = (15 / 100 * parseInt(salario)) + parseInt(salario)
        paginaResultado.innerHTML = ("Seu salário anterior era de = R$" + salario +
            ". Seu percentual de aumento é de 15%. Seu novo Salário é de = R$" + NovoSalario)
            var novoBotaoRecalcular = document.createElement("button")
            var novoBotaoRetornar = document.createElement("button")
            novoBotaoRecalcular.innerText = "Recalcular meu ajuste salárial"
            novoBotaoRetornar.innerText = "Voltar para o ínicio"
            novoBotaoRecalcular.addEventListener("click", trocaDePagina2)
            novoBotaoRecalcular.addEventListener("click", limparInput)
            novoBotaoRetornar.addEventListener("click", trocaDePagina0)
            novoBotaoRetornar.addEventListener("click", limparInput)
            paginaResultado.append(novoBotaoRecalcular)
            paginaResultado.append(novoBotaoRetornar)
    } else if (salario > 700 && salario < 1500) {
        let NovoSalario = (10 / 100 * parseInt(salario)) + parseInt(salario)
        paginaResultado.innerHTML = ("Seu salário anterior era de = R$" + salario +
            ". Seu percentual de aumento é de 10%. Seu novo salário é de = R$" + NovoSalario)
            var novoBotaoRecalcular = document.createElement("button")
            var novoBotaoRetornar = document.createElement("button")
            novoBotaoRecalcular.innerText = "Recalcular meu ajuste salárial"
            novoBotaoRetornar.innerText = "Voltar para o ínicio"
            novoBotaoRecalcular.addEventListener("click", trocaDePagina2)
            novoBotaoRecalcular.addEventListener("click", limparInput)
            novoBotaoRetornar.addEventListener("click", trocaDePagina0)
            novoBotaoRetornar.addEventListener("click", limparInput)
            paginaResultado.append(novoBotaoRecalcular)
            paginaResultado.append(novoBotaoRetornar)
    } else if (salario >= 1500) {
        let NovoSalario = (5 / 100 * parseInt(salario)) + parseInt(salario)
        paginaResultado.innerHTML = ("Seu salário anterior era de = R$" + salario +
            ". Seu percentual de aumento é de 5%. Seu novo salário é de = R$" + NovoSalario)
            var novoBotaoRecalcular = document.createElement("button")
            var novoBotaoRetornar = document.createElement("button")
            novoBotaoRecalcular.innerText = "Recalcular meu ajuste salárial"
            novoBotaoRetornar.innerText = "Voltar para o ínicio"
            novoBotaoRecalcular.addEventListener("click", trocaDePagina2)
            novoBotaoRecalcular.addEventListener("click", limparInput)
            novoBotaoRetornar.addEventListener("click", trocaDePagina0)
            novoBotaoRetornar.addEventListener("click", limparInput)
            paginaResultado.append(novoBotaoRecalcular)
            paginaResultado.append(novoBotaoRetornar)
    }
}

function trocaDePagina0(){
    paginaInicial.style.display = "flex"
    primeiraPagina.style.display = "none"
    paginaCalculo.style.dislay = "none"
    paginaResultado.style.display = "none"
}

function trocaDePagina1(){
    paginaInicial.style.display = "none"
    primeiraPagina.style.display = "flex"
    paginaCalculo.style.display = "none"
    paginaResultado.style.display = "none"
}
function trocaDePagina2(){
    paginaInicial.style.display = "none"
    primeiraPagina.style.display = "none"
    paginaCalculo.style.display = "flex"
    paginaResultado.style.display = "none"
}

function trocaDePagina3(){
    paginaInicial.style.display = "none"
    primeiraPagina.style.display = "none"
    paginaCalculo.style.display = "none"
    paginaResultado.style.display = "flex"
}

function limparInput(){
    var salario = document.querySelector("#inputUsuario").value = "";
}