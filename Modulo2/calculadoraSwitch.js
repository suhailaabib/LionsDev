
 function calcular (a, b, operador){

 switch(operador){

    case "+":
      console.log(a+b);
    break;
    
    case "-" :
       console.log(a-b);
    break;

    case "*":
     console.log(a*b);
    break;

    case "/" :
     console.log(a/b);
    break;

    default: 
      console.log('Não reconhecido')
 
   }

 }
 
  calcular(4, 2, "+")
