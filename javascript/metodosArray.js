const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numeros.forEach((numero) => {
    console.log(numero);
})

const numerosPares = numeros.filter((numero) => {
    return numero % 2 === 0
})

const numerosImpares = numeros.filter((numero) => {
    return numero % 2 !== 0
})

const numerosDobrados = numeros.map((numero) => { // map sempre retorna um novo array
    return numero * 2
})

console.log('Todos os números:', numeros);
console.log('Números pares:', numerosPares);
console.log('Números ímpares:', numerosImpares);
console.log('Números dobrados com map:', numerosDobrados);