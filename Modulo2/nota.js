let nota1
let nota2
let media

   console.log("Qual é sua primeira nota ?")
process.stdin.once('data', function (data){
  nota1 = parseFloat(data.toString().trim())

   console.log("Qual é sua segunda nota ?")
process.stdin.once('data', function (data){
      nota2 = parseFloat(data.toString().trim())

    processsamento(nota1, nota2)

    process.exit()
    
   })
})

    function processsamento (nota1, nota2){

      media = (nota1 + nota2) / 2 

        if (media < 8){
          console.log(`Que pena, você ficou para recuperação pois sua nota foi NOTA ${media}`)
        }else{
            console.log(`Parabéns, você passou de ano com NOTA ${media}`)
        }
}