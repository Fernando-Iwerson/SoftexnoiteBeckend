

const prompt = require('prompt-sync')(); 

function expoenteSomatorio(num) {
    let result = 0;
    if (num > 0) {
        for (let i = 0; i < num; i++) {
            result += (2 * i + 1);
        }
        
        return result;
    
    } else {
        console.log("Número Inválido");
        return undefined
    }
}

var num = parseInt(prompt("Informe o número inteiro positivo: "));
console.log(`${num}² = ${expoenteSomatorio(num)}`);