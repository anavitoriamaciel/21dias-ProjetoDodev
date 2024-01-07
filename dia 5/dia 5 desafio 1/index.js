let num1 = parseInt(prompt("Escolha um numero"))
let num2 = parseInt(prompt("Escolha um segundo numero"))
let operacao = (prompt("Escolha uma operação matematica que sera realizada com os dois numero que você escolheu, op1 = +; op2 = -; op3 = *; op4 = /;"))

switch (operacao) {

    case "1":
         console.log( num1 + "+" + num2 + "=" + (num1 + num2))
    break;

    case "2":
         console.log( num1 + "-" + num2 + "=" + (num1 - num2))
    break;

    case "3":
         console.log( num1 + "*" + num2 + "=" + (num1 * num2))
    break;

    case "4": 
    console.log( num1 + "/" + num2 + "=" + (num1 / num2))
    break;



}