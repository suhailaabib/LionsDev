let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0]
let soma = 0
let media = 0
let notaMaxima = notas [0]
let notaMinima = notas [0]
let notasAcimadaMedia = 0
let notasReprovadas = 0

//letra A

for(let i = 0; i < notas.length; i++){

    soma = soma + notas[i]
}
    media = soma/notas.length

    console.log(`A média das notas é ${media}`)

//letra B 

for(let i = 0; i < notas.length; i++){
    if(notas[i] > notaMaxima){
        notaMaxima = notas[i]
    }if(notas[i] < notaMinima){
        notaMinima = notas[i]
    }
}
   console.log(notaMaxima)
   console.log(notaMinima)

//letra C

for(let i = 0; i < notas.length; i++){
    if(notas[i] > media){
        notasAcimadaMedia ++
    }
}
  console.log(`Possui ${notasAcimadaMedia} notas acima da média ${media}`)

//letra D

 notas.push(4.0)
  console.log(notas)

//letra E

for(let i = 0; i < notas.length; i ++){
    if(notas[i] > 6.0){
        notasReprovadas++
    }
}
    console.log(notasReprovadas)
