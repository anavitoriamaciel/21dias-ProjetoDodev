let mediaGeral = 0
let homens = 0
let mulheracima7 = 0
let maiorNotaH = 0
let aluno = 1

while (contador <= 10) {
    nota = parseInt(prompt("Digite a nota do " + aluno + " aluno."))
    sexo = prompt("Digite o sexo do aluno.(m/f)")

    if (sexo == "m"){
        if (nota > maiorNotaH) {
            maiorNotaH = nota
        }
        homens++
    }

    if (sexo == "f" && nota > 7){
        mulheracima7++
    }

    mediaGeral += nota
    aluno++

}
    mediaGeral = mediaGeral / 10

console.log("A media geral dos alunos foi " + mediaGeral)
console.log("A quantidade de homens cadastrados foi: " + homens)
console.log("A quantidade de mulheres com a nota acima de 7 foi: " + mulheracima7)
console.log("A maior nota dos homens foi: " + maiorNotaH)