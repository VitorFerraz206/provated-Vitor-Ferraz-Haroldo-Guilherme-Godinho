export function criarFila(tamanho=5){
    return[... new Array (tamanho)]
}



export function inserirFila(fila, musica){
    const posicao=fila.findIndex(elemento=>elemento===undefined);
    if(posicao!==-1){
        fila[posicao]=musica;
        console.log(`${musica.fila} foi adicionado um elemento a fila`)
    }
}


export function removerFila(fila){
  const primeiraMusica= fila.
  findIndex(musica => musica !== undefined && fila.includes(musica));
  primeiraMusica = fila;[primeiraMusicaPosicao];
}

if (UltimaMusica !== undefined){
    fila.splice(primeiraMusicaPosicao, 1);
    console.log(`${primeiraMusica.titulo} retirado da fila`)
}
else {
    console.log("fila cheia")
     }



export function esvaziarFila(fila){
    if(fila){
        fila.fill(undefined);
        return"fila esvaziada"

    }
    return"erro"
}


export function verTamanhoFila(fila){
    
}