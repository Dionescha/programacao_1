function calcular(oper) {
    var valor1 = document.calcform.valor1.value;
    var valor2 = document.calcform.valor2.value;
 
    if (oper == "+") {
       var res = parseInt(valor1) + parseInt(valor2);
    } else {
       if (oper == "-") {
          var res = valor1-valor2;
       } else {
          if (oper == "*") {
             var res = valor1*valor2;
          } else {
             var res = valor1/valor2;
          }
       }
    }
 
    document.calcform.res.value = res;
 }
