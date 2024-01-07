//declaracao de variaveis
let nome = ""
let idade = 0
let altura = 0
let peso = 0

//solicitando informaçao ao usario
nome =  prompt('Insira seu nome:') ;
idade = parseInt( prompt ('Insira sua idade:') );
altura = parseFloat( prompt ('Insira sua altura em metros:') );
peso = parseInt( prompt ('Insira seu peso em kg:') );

let anoDeNascimento = 0
anoDeNascimento = 2024 - idade

let imc = 0
imc= peso / (altura * altura)


console.log ("Olá " + nome + ", você tem " + idade + " anos, nasceu em " + anoDeNascimento + ", tem " + altura + " de altura, pesa " + peso + "kg seu IMC é " + imc + " Kg/m2.")
