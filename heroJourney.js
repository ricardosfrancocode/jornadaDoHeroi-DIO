function calcularPosicaoFinal(posicaoInicial, passos){
    let posicaoFinal = posicaoInicial + passos;
    return `A posição final do Herói ${posicaoFinal}`;
}

function jornadaDoHeroi(posicaoInicial,passos){
    if(isNaN (posicaoInicial) || isNaN(passos)){
        console.log("Por favor, insira números inteiros válidos.")
    }else{
        const resultado = calcularPosicaoFinal(posicaoInicial,passos);
        console.log(resultado);
    }
}
    
jornadaDoHeroi(10,5);
jornadaDoHeroi(15,3);
jornadaDoHeroi(10,6);


