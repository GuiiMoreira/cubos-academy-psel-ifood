function solucao(sequencia) {
    
    let indice = 0
    
    for (let i = 0; i < sequencia.length; i++){
        if (sequencia[i] === ">"){
            indice++
        } 
        else {
            indice--
        }
    }
    
    while(indice < 0){
        indice = indice + 7
    }
    while(indice > 6){
        indice = indice - 7
    }
    console.log(indice)
}