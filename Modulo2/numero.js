let numero

console.log("Digite um número: ")

 process.stdin.once('data', function(data){
    numero = data.toString().trim()
     processamento(numero)
 process.exit()

})
 function processamento(numero){

    if(numero ==0){
        console.log("O número que você digitou é zero.")
     }else if(numero % 2 ==0){
        console.log("O número que você digitou é par.")
     }else{
        console.log("O número que você digitou é ímpar.")
     }
     
 }