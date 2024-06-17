let numero

console.log("Escolha uma tabuada: ")

process.stdin.once('data', function(data){
    numero = parseInt (data.toString().trim())
    calcularTabuada(numero)

process.exit()

})

 function calcularTabuada(numero){

    for ( let i = 0; i <= 100; i+=1) {

          console.log(`${numero} X ${i} = ${numero*i}`)
        } 
 }