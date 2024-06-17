//Samantha, Sheldon e Suháila

let caracteres = "ACRMSVflkhpe238495"
let senha = ""
let comprimentoSenha = ""
let numeroAleatorio

console.log("Qual é comprimento da senha ? ")

process.stdin.once('data', function(data){
    comprimentoSenha = parseInt(data.toString().trim())
    processamento(caracteres, senha, comprimentoSenha)

process.exit()

})
 function processamento (caracteres, senha, comprimentoSenha){
 
    for(let i = 0; i < comprimentoSenha; i++){

     numeroAleatorio = Math.floor(Math.random() * caracteres.length)

     senha = senha + caracteres.charAt(numeroAleatorio)

    }
    console.log("sua senha é : " + senha)
 }