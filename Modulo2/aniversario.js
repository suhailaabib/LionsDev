let nome 
let idade
let aniversario
let fezAniversario
const ano = 2024

    console.log("Como é o seu nome ?")
process.stdin.once('data', function(data){
    nome = data.toString().trim()

    console.log("Qual a sua idade ?")
 process.stdin.once('data', function(data){
     idade = parseInt (data.toString().trim())

     console.log("Digite o ano que nasceu:")
process.stdin.once('data', function(data){
    aniversario= data.toString().trim()
    
    processamento(nome, idade, aniversario)

    process.exit()
          })
     })
})

 function processamento(nome, idade, aniversario){

    let anoDenascimento = ano - idade

    if(fezAniversario == "sim"){
       fezAniversario = true
    }else{
        fezAniversario = false
    }   
    if(fezAniversario){
        console.log(`Você nasceu em ${anoDenascimento}`)
    }else{
        console.log (`Você nasceu em ${anoDenascimento-1}`)
    }
 }