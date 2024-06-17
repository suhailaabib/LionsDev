//Samantha, Sheldon e Suháila

const readline = require('readline')
let numeroAleatorio

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    })
    
    numeroAleatorio = Math.floor(Math.random() * 100) + 1

    solicitarPalpite()

    function solicitarPalpite() {
 
    rl.question('Faça um palpite de um número ?', (resposta) => {
    console.log(`Você digitou: ${resposta}`)
    
    if (resposta > numeroAleatorio) {
    console.log('muito alto')
    solicitarPalpite()
    } else if (resposta < numeroAleatorio) {
    console.log('muito baixo')
    solicitarPalpite()
    }else{
    console.log('Parabéns!')
    rl.close()
    }
    //console.log(` O número é:${numeroAleatorio}`)
    })
    }
    solicitarPalpite()