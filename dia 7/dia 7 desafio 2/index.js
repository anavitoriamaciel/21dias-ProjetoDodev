let nome = prompt("Por gentileza Insira o seu nome.")
let cpf = prompt("Por gentileza insira o seu CPF.")
let valor = 0
let saldoTotal= 2000
let maiorValor = 0
let mediaValores = 0
let continuar = 1
let cont = 0

do {
    operacao = prompt("Ola, escolha a operacao desejada (saque ou deposito)")
    valor = Number(prompt("Insira o valor desejado."))
    mediaValores += valor

    if (valor > maiorValor) {
        maiorValor = valor
    }

    if (operacao === 'saque' && valor <= saldoTotal) {
        saldoTotal -= valor
    }else if (operacao === 'saque' && valor > saldoTotal) {
        console.log(" O valor sacado deve ser menor ou igual ao saldo, sr")
    }else {
        saldoTotal += valor
    }

    cont++
    console.log( nome + ", seu saldo e: " + saldoTotal)
    console.log("O maior valor inserido foi " + maiorValor)
    console.log("A media dos valores foi " + (mediaValores / cont))

    continuar = Number(prompt("voce deseja continuar? 1 - para sim 2 - para"))
  
} while(continuar === 1)