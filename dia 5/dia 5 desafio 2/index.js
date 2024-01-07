let valor
let quantidade
let opcao = prompt("Escolha um dos tres, n1 gasolina;n2 alcool;n3 calibrar pneus;")

switch (opcao){

    case "1":
        valor = parseInt(prompt("Digite o valor que deseja para abastecer"))
        quantidade= valor / 5
        console.log (" Foram abastecidos " + quantidade + "L de gasolina")
    break;

    case "2":
        valor = parseInt(prompt("Digite o valor que deseja para abastecer"))
        quantidade = valor / 3
        console.log (" Foram abastecidos " + quantidade + "L de alcool")
    break;

    default:
        console.log ("Pneus calibrados com sucesso!")
     
    break;


}