
 function calcular (a, b, operador) {

    if(operador == '+'){
      return a + b
    }
    else if(operador == '-'){
      return a - b 
    }
    else if (operador == '*'){
      return a * b
    }
    else if(operador =='/'){
     return a / b
    }
    else{
        console.log("O operador que você digitou é inválido")
    }
}
    console.log(calcular(6,2, '+'));
