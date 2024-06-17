let notas = [3, 5, 7, 9.3, 4, 10, 6.0, 8.9, 5.2, 9]
let soma = 0 
let media = 0
let notaAlta = notas[0]
let notaBaixa = notas [0]
let notasAcimadaMedia = 0
let notasAbaixodaMedia = 0

//calcular media

for(let i = 0; i < notas.length; i++){

    soma = soma + notas [i] 
}
    media = soma / notas.length 

   console.log(`A media é ${media}`)

// nota mais alta e mais baixa

for(let i = 0; i < notas.length; i++){

   if (notas[i] > notaAlta){
    notaAlta = notas[i]
   }if(notas[i] < notaBaixa){
    notaBaixa = notas[i]
   }
}

    console.log(notaAlta)
    console.log(notaBaixa)
  
//Conte e exiba quantas notas estão acima da média calculada

for(let i = 0; i < notas.length; i++){
    if(notas[i] >= media){
        notasAcimadaMedia ++
    }
}
    console.log(` o vetor notas possui ${notasAcimadaMedia} notas acima da media ${media}`)

//Adicione uma nova nota ao array e exiba o array atualizado.

notas.push(14)
 console.log(notas)
 
//Conte e exiba quantas notas são consideradas reprovadas (abaixo de 8.0) 

for(let i = 0; i < notas.length; i++){
   if (notas [i] > 8){
    notasAbaixodaMedia ++
   }
}
    console.log(notasAbaixodaMedia)