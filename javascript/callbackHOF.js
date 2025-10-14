// HOF -> Higher Order Function
// A function that takes another function as an argument or returns a function as a result

function calcular(num1, num2, operacao) {

    return operacao(num1, num2);
}

function soma (num1, num2) {
    return num1 + num2;
}

function subtracao (num1, num2) {
    return num1 - num2;
}

const resultadoSoma = calcular(10, 5, soma); // 15
const resultadoSubtracao = calcular(10, 5, subtracao); // 5

console.log(resultadoSoma); // 15
console.log(resultadoSubtracao); // 5