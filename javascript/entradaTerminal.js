const readline = require('readline');

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

leitor.question('Qual o seu nome? ', (nome) => {
    console.log(`Olá, ${nome}!`);
    console.log('Bem-vindo ao programa.');

    leitor.question('Quantos anos você tem? ', (idade) => {
        if (idade > 18) {
            console.log('Você já pode tirar sua CNH')
        } else {
            console.log('Você ainda não pode tirar sua CNH')
        }
        
        leitor.close();
    })
})