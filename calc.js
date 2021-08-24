const readlineSync = require('readline-sync');

function doOperati1on(operator, value1, value2) {

    // switch (operator) {
    //     case '+':
    //         value1 + value2;
    //     break;

    //     case '-':
    //         value1 - value2;
    //     break;

    //     case '*':
    //         value1 * value2;
    //     break;

    //     case '/':
    //         value1 / value2;
    //     break;
    //     default:
    //         console.log('opção inválida')
    //     break;
    // }
     if (operator == "+") {
         return value1 + value2;
     } else if
         (operator == "-") {
         return value1 - value2;
     } else if
         (operator == "*") {
         return value1 * value2;
     } else if
         (operator == "/") {
         return value1 / value2;
     } else {
         console.log('Operação inválida, informe uma operação válida');
        domenu()
     }
}

function domenu (menu){

var menu = readlineSync.question("Digite 1: para continuar e 2 para Sair! \n")

switch (menu){
    case '1':    

    var oper = readlineSync.question("Qual operacao deseja efetuar (+) (-) (*) (/)? : ");
    var valor = parseFloat(readlineSync.question("Insira o primeiro numero: \n"));
    var valor1 = parseFloat(readlineSync.question("Insira o segundo numero: \n"));
    console.log('O resultado é', doOperati1on(oper, valor, valor1)) 
    domenu()
    break;
    case '2':
        console.log('Programa finalizado....');
        break;
    default:
        console.log('Opção inválida....');    

}
}
   
domenu()
