let age = 17;

if (age >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

(age < 16) ? console.log("Criança") : console.log("Adulto");
console.log(age < 16 ? "Criança" : "Adulto");

const notaAluno = 8;

switch (notaAluno) {
    case 10:
    case 9:
        console.log("Excelente");
        break;
    case 8:
    case 7:
        console.log("Muito bom");
        break;
    case 6:
        console.log("Mediano");
        break;
    case 5:
    case 4:
    case 3:
    case 2:
    case 1:
    case 0:
        console.log("Ruim");
        break;
    default:
        console.log("Nota inválida");
        break;
}