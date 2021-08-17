function solucao(precos) {
   let valorTotal = 0
   let valorMaior200 = 0
   
   for(let i =0; i < precos.length; i++){
       valorTotal = valorTotal + precos[i]
       if (precos[i] > 200){
           valorMaior200 = valorMaior200 + 1
        }  
    }  
    
    if (valorTotal < 1000) {
        console.log ("NORMAL")
    } else if (valorMaior200 === 0) {
          console.log ("VIP")
        } else {
          console.log ("PREMIUM")
    }
}
