const readlineSync = require('readline-sync');

function doOperation(operator, value1, value2) {
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
        console.log('Operação inválida');
        domenu()
    }
}

function domenu (menu){
    var menu = readlineSync.question("Digite 1: para continuar e 2 para Sair! \n")
        if( menu == 1 ){
           const oper = readlineSync.question("Qual operacao deseja efetuar (+) (-) (*) (/)? : ");
            const valor = parseFloat(readlineSync.question("Insira o primeiro numero: \n"));
            const valor1 = parseFloat(readlineSync.question("Insira o segundo numero: \n"));
            console.log('O resultado é', doOperation(oper, valor, valor1))  
            domenu()
            } else if(menu == 2) {
                    console.log("Programa Finalizado")                    
            }else {
                console.log('Opção inválida')
            domenu()
        
            }   
           
        }

        domenu()
//console.log('O resultado é', doOperation(oper, valor, valor1)) 
