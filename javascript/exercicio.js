const fullName = "Igor Henrique Gomes da Silva";
console.log(`Olá, ${fullName}! Seja bem-vindo(a) ao curso de JavaScript!`);

let currentYear = 2025;
let birthYear = 1998;
let age = currentYear - birthYear;
console.log(`Você tem ${age} anos.`);

let city = "Jandira";
let state = "SP";
let country = "Brasil";
console.log(`Você mora em ${city}, ${state}, ${country}.`);

let student = true;
console.log(typeof student);

let initialAmount = 0;

let currentAmount;
currentAmount = initialAmount + 200;
currentAmount = currentAmount - 50;

console.log(`Seu saldo atual é de R$${currentAmount}.`);

let mathScore = 8.5;
let historyScore = 7.0;
let scienceScore = 9.0;

let averageScore = (mathScore + historyScore + scienceScore) / 3;
console.log(`Sua média final é ${averageScore.toFixed(2)}.`);

let concat = averageScore + fullName;

console.log(typeof concat);