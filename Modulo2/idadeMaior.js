let nome 
let idade

console.log("Qual seu nome ?")

process.stdin.once('data', function(data){
    nome = data.toString().trim()
    console.log("Qual sua idade ?")

process.stdin.once('data', function(data){
     idade = data.toString().trim()
      processamento(nome, idade)
 
process.exit()

  })

})

 function processamento(nome, idade){
 
    if(idade >= 18){
        console.log(`Olá ${nome}, você é maior de idade`)
    }else{
       idade = 18 - idade  
          console.log(`Olá ${nome}, você será maior em ${idade} anos`)
    } 
 }