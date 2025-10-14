//     "web": 5,
//     "javascript": 3
export function contaPalavras(texto) {
  const paragrafos = extraiParagrafos(texto);
  const contagem = paragrafos.flatMap((paragrafo) => {
    // [1, 2, [3, 4]] => [1, 2, 3, 4]
    if (!paragrafo) return [];
    return verificaPalavrasDuplicadas(paragrafo);
  });
  return contagem;
}

function extraiParagrafos(texto) {
  return texto.toLowerCase().split("\n");
}

// function quebraEmParagrafos(texto) {
//         .filter((paragrafo) => paragrafo)
//         .map((paragrafo) => {  ----> neste caso a performance é pior, caso fosse um texto muito grande
//     })
// }

function limpaPalavras(palavra) {
  //return palavra.replace('(', ''); melhor utilizar o regex
  return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
}

function verificaPalavrasDuplicadas(texto) {
  const listaPalavras = texto.split(" ");
  const resultado = {};
  //objeto[propriedade] = valor
  listaPalavras.forEach((palavra) => {
    if (palavra.length >= 3) {
      const palavraLimpa = limpaPalavras(palavra);
      resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1;
    }
  });
  return resultado;
}
