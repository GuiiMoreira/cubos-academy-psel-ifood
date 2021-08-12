function solucao(primeiraLetra, segundaLetra, palavras) {
    
    let iniciaisCorretas = 0
    for (let item of palavras){
        if (primeiraLetra === item[0] && segundaLetra === item[1]){
            iniciaisCorretas++
            console.log(item)
        }
    }
    
    if (iniciaisCorretas === 0){
           console.log("NENHUMA")
        }
    }
