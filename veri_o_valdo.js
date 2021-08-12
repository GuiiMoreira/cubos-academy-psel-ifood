function solucao(obras) {
    
    let maisValiosa = obras[0]
    
    for (let i = 0; i < obras.length; i++) {
        if (obras[i].valor > maisValiosa.valor) {
            maisValiosa = obras[i]
        }
    }
    
    console.log(maisValiosa.nome)
}


