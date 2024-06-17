let nome 
let idade
const ano = 2024

console.log("Como é o seu nome ?")

process.stdin.once('data', function(data){

    nome = data.toString() .trim()

 console.log("Qual a sua idade ?")
 
 process.stdin.once('data', function(data){

    idade = parseInt (data.toString() .trim())

    processamento(nome, idade)

 process.exit()

     })
})

 function processamento(nome, idade){

    let anoDenascimento = ano - idade

console.log(`Olá ${nome}, você tem ${idade} anos, se você nasceu em ${anoDenascimento}`)

 }
