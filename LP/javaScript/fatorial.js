const prompt = require('prompt-sync')();

function fatorial(num) {
    if (num > 0) {
        if (num == 1) {
            return 1;
        } else {
            return fatorial(num - 1) * num;
        }
    } else {
        throw new Error(`${num} é inválido para o cálculo do fatorial`)
    }

}

do {
    var op;
    try {
        var num = parseInt(prompt("Informe o número inteiro: "));
        console.log(`${num}! = ${fatorial(num)}`);
    } catch (error) {
        console.log(error);
    }finally{
        op = prompt("Deseja repetir o programa: (sim | não): ").toLowerCase();
    }
}while (op === "sim");
    

