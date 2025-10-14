function saudacao() {
    console.log("Olá, seja bem-vindo!");
}

setTimeout(saudacao, 3000) // Chama a função saudacao após 3 segundos (3000 milissegundos)

let contador = 0;

const id = setInterval(() => {
    contador++;
    console.log(`Tempo decorrido: ${contador} segundos`);

    if(contador == 10 ){
        clearInterval(id)
    }
}, 1000);