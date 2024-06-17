let resposta
let gostaDeCafe

console.log("você gosta de café ?")

process.stdin.once('data', function(data){
    resposta = data.toString().trim()
    processamento(resposta)
process.exit()

})

  function processamento(resposta){

    if (resposta == "sim"){
        gostaDeCafe = true
    }else {
        gostaDeCafe = false
    }
    if(gostaDeCafe ==true){
      console.log("Que bom que você gosta de café")
    }else {
      console.log("Que pena que não gosta de café")
    }
  }
