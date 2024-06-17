let nota
let classificacao

console.log("Digite a nota: ")

 process.stdin.once('data', function(data){
    nota = parseFloat(data.toString().trim())

    console.log(`Sua nota ${verificar(nota)}`)
 
    classificacao = verificar (nota)

     if(classificacao == "A"|| classificacao =="B" || classificacao=="C"){
        console.log(`Parabéns, você foi aprovado com NOTA ${classificacao}`)
      }else if(classificacao == "D" || classificacao == "F"){
        console.log(`Que pena, você ficou para recuperação, pois sua nota foi NOTA ${classificacao}`)
      }else{
        console.log(`Essa NOTA é ${classificacao} inválida`)
      }
 process.exit()

})

 function verificar (nota){

    switch(true){

        case (nota >= 90 && nota <= 100):
          return "A"
        
        case (nota >= 80 && nota <= 89) :
          return "B"
    
        case (nota >= 70 && nota <= 79):
          return "C"
    
        case (nota >= 60 && nota <= 69) :
          return "D"

        case (nota >= 0 && nota <= 59):
          return "F"

        default: 
          console.log('Nota Inválida')
    }
}