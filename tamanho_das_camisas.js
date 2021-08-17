function solucao(tamanhoBr) {

    const conversao = {
        "PP" : "XS",
        "P"  : "S" ,
        "M"  : "M" ,
        "G"  : "L" ,
        "GG" : "XL",    
    }
    
    let resposta = ""
    let tamanho = ""
    for (i=0; i<tamanhoBr.length; i++){
        tamanho += tamanhoBr[i]
        resposta = conversao[tamanho]
    }
    console.log(resposta)
}