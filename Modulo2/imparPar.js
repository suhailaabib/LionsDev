let somaPares = 0
let somarImpares = 0
let totalPares = 0
let totalImpares = 0
let mediaPares = 0
let mediaImpares = 0

  for ( let i = 0; i <= 999; i+=1) {

        if( i % 2 == 0){
            somaPares+=i
            totalPares++
         }else{
            somarImpares+=i
            totalImpares++
         }

  }
 
  mediaPares = somaPares / totalPares

  mediaImpares = somarImpares / totalImpares

  console.log(`A soma de números pares é ${somaPares}`)
  console.log(`A some de números impares é ${somarImpares}`)
  console.log(`O total de números pares é ${totalPares}`)
  console.log(`O total de números ímpares é ${totalImpares}`)
  console.log(`A media dos números pares são ${mediaPares}`)
  console.log(`A media dos números impares são ${mediaImpares}`)

  if(totalPares > totalImpares){
   console.log(`O total dos números pares é maior que a dos números ímpares`)
  }else if (totalImpares > totalPares){
   console.log(`O total dos números ímpares é igual aos números pares`)
  }else{
   console.log(`O total dos números pares é igual aos números impares`)
  }