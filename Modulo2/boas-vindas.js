var nome = ""
console.log("Qual o nome do usúario:" , nome)
process.stdin.on ('data', function(data) {
    let nome = data.toString();
var saudacao = "Olá"+ "," + nome
console.log(saudacao)

})
