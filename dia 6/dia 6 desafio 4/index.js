let numero = Number(prompt("Escolha um numero"))

for (let i=numero; i <=numero + 2; i++){
    console.log ("tabuada do numero " + i)
    for (let y = 0; y<= 10; y++){
        console.log (i+ " x " + y + " = " + (i * y))
    }

}