Salário = 2000

if (Salário <= 280) {
    let NovoSalário = (20 / 100 * Salário) + Salário
    console.log("Seu salário anterior era de = R$" + Salário +
        ". Seu percentual de aumento é de 20%. Seu novo Salário é de = R$" + NovoSalário)
} else if (Salário > 280 && Salário < 700) {
    let NovoSalário = (15 / 100 * Salário) + Salário
    console.log("Seu salário anterior era de = R$" + Salário +
        ". Seu percentual de aumento é de 15%. Seu novo Salário é de = R$" + NovoSalário)
} else if (Salário > 700 && Salário < 1500) {
    let NovoSalário = (10 / 100 * Salário) + Salário
    console.log("Seu salário anterior era de = R$" + Salário +
        ". Seu percentual de aumento é de 10%. Seu novo salário é de = R$" + NovoSalário)
} else if (Salário >= 1500) {
    let NovoSalário = (5 / 100 * Salário) + Salário
    console.log("Seu salário anterior era de = R$" + Salário +
        ". Seu percentual de aumento é de 5%. Seu novo salário é de = R$" + NovoSalário)
}