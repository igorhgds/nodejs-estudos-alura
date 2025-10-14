let totalNumeroPar = 0;
let totalNumeroImpar = 0;

for (let contador = 0; contador <= 100; contador++) {
    if (contador % 2 == 0){
        totalNumeroPar++;
    } else {
        totalNumeroImpar++;
    }
}

console.log(`Total de números pares: ${totalNumeroPar}`);
console.log(`Total de números ímpares: ${totalNumeroImpar}`); 

// soma de 1 a 100
let soma = 0;

for (let i = 1; i <= 100; i++){
    soma += i;
}
console.log(`A soma de 1 a 100 é: ${soma}`);