const readline = require('readline')

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
})

let musicas = []

exibirMenu()

function exibirMenu(){
       console.log(`
    Menu:
      1. Cadastrar música
      2. Listar todas as músicas
      3. Editar as músicas
      4. Remover as músicas
      5. Sair
    `)

    rl.question('Escolha uma opção: ', (opcao) => {

        switch(opcao){
            case '1':
                cadastrarMusicas()
            break
            case '2':
                listarMusicas()
            break
            case'3':
                editarMusicas()
            break
            case'4':
               removerMusicas()
            break
            case '5':
                rl.close()
            break

            default:
                console.log('Opção inválida, tente novamente.')

        exibirMenu()
            break
        }
    })
}

function cadastrarMusicas() {

    rl.question('Digite o nome da música: ', (nome) => {
    rl.question('Digite o nome do cantor: ', (cantor) => {
    rl.question('Digite o gênero da música: ', (genero) =>{
  
        musicas.push({ nome: nome, cantor: cantor, genero: genero})
    
    console.log('Música cadastrada com sucesso!')
 
     exibirMenu()

    })
    })
    })
}

function listarMusicas(){
       if(musicas.length == 0){
        console.log("Música não cadastrada")
       }else{
        console.log(musicas)
       }

    exibirMenu()

}

function editarMusicas() {

     if(musicas.length == 0){
        console.log('Nada cadastrado')
    exibirMenu()
     }else{
        console.log(musicas)

    rl.question('Digite a música que deseja editar: ', (opcao) => {
     if(opcao > 0 && opcao <= musicas.length){

    rl.question('Digite o novo nome da música: ', (nome) => {
    rl.question('Digite o novo nome do cantor: ', (cantor) => {
    rl.question('Digite o novo gênero da música: ', (genero) => {
        
     musicas[opcao -1] = {
       nome,
       cantor,
       genero

     }
       console.log('Editado com sucesso!')
    exibirMenu()
    
    })
    })
    })

    }else{
        console.log('Número inválido, tente novamente.')
    exibirMenu()
    }
    })
    }
}

function removerMusicas(){
    if(musicas.length == 0){
        console.log('Nada cadastrado.')
    exibirMenu()
    }else{
        console.log(musicas)

    musicas.forEach((index, ) => {
        console.log(`${index + 1} . ${musicas}`)
    })
     
      rl.question('Digite a música que deseja remover: ', (opcao) => {
        if(opcao > 0 && opcao <= musicas.length){
            musicas.splice(opcao - 1,1)
             console.log('Música removida com sucesso!')
            exibirMenu()
        }else{
            console.log('Número inválido, tente novamente.')
        exibirMenu()
        }
      })
    }
}