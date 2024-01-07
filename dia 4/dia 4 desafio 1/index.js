


const fome =  (prompt('Você está com fome? (sim/nao)')) ;
const dinheiro = ( prompt ('Você tem dinheiro? (sim/nao)') );
const aberto = ( prompt ('O restaurante está aberto? (sim/nao)') );

if (fome == "nao" || dinheiro == "nao" ) {
    console.log ("Hoje a janta será em casa!");
}else if (dinheiro == "sim" && aberto == "sim") {
    console.log ('Hoje o jantar será no seu restaurante preferido!');
} else {
    console.log ('Peça um delivery!');
}

    
