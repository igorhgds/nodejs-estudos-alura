function saudacao1(nome) {
    console.log("Olá, ", nome);
}

const saudacao2 = (nome) => {
    console.log("Olá, seja bem-vindo ", nome);
}

saudacao1("Maria");
saudacao2("João");

function calcularDobro(numero) {
    return numero * 2;
}

const resultado = calcularDobro(5);
console.log(resultado);

console.log(calcularDobro(10));