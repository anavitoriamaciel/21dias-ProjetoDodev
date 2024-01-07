let nome = prompt('Qual seu nome?') 
let idade = Number(prompt ('Qual sua idade?') )
let cnh = prompt ('Você tem carteira de motorista? (sim/nao)')
let carro = prompt ('Você tem um carro? (sim/nao)')


if (idade < 18 || cnh === "nao" ) {
    console.log ( nome + ", você não pode dirigir.")
}else if ( idade >= 18 && cnh === "sim" && carro === 'nao' ) {
    console.log ( nome + ", você pode dirigir mas não tem um carro.")
} else if (idade >=18 && cnh=== "sim" && carro === 'sim'){
    console.log (nome + ", você sera o motorista!")
}