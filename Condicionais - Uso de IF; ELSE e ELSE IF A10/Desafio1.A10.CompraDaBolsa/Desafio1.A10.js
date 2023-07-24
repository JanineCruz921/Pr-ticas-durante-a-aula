var ValorBolsa = 2000
var SaldoConta = 500

if (SaldoConta >= ValorBolsa){
console.log("Parabéns! Seu saldo foi suficiente para essa aquisição. Cartão aceito com sucesso!" 
+ " Valor restante em conta = R$" + (SaldoConta - ValorBolsa))
} else {
console.log ("Ups, Esse valor não é suficiente para essa aquisição." + " Falta em sua conta um saldo de R$" 
+ (ValorBolsa - SaldoConta))
}