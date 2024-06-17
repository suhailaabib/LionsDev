//Samantha, Sheldon e Suháila

let numero

console.log("Quantos lados tem o dado ?")

 process.stdin.once('data', function (data){
      numero = parseInt(data.toString().trim())
       processamento(numero)

    process.exit()
})
 
    function processamento(numero){

        console.log(`O número do dado é:${ Math.floor(Math.random() * numero) + 1}`)

    }