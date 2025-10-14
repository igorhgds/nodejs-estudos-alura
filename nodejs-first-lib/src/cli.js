//const fs = require('fs');
//const trataErros = require('./erros/funcoesErro');
import fs from "fs";
import path from "path";
import trataErros from "./erros/funcoesErro.js";
import { contaPalavras } from "./index.js";
import { montaSaidaArquivo } from "./helpers.js";
import { Command } from "commander";
import chalk from "chalk";

const program = new Command();

program
  .version('0.0.1')
  .option('-t, --texto <string>', 'caminho do texto a ser processado')
  .option('-d, --destino <string>', 'caminho do diretório de destino')
  .action((options) => {
    const { texto, destino } = options;

    if (!texto || !destino) {
      console.error(chalk.red('Erro: favor inserir os caminhos de origem e destino.'));
      program.help();
      return;
    }

    const caminhoTexto = path.resolve(texto);
    const caminhoDestino = path.resolve(destino);

    try {
      processaArquivo(caminhoTexto, caminhoDestino);
      console.log(chalk.green('Arquivo processado com sucesso!'));
    } catch (error) {
      console.log("Ocorreu um erro no processamento", error)
    }
  })

  program.parse();

// const caminhoArquivo = process.argv;
// const link = caminhoArquivo[2];
// const endereco = caminhoArquivo[3];

function processaArquivo(texto, destino){
  fs.readFile(texto, "utf-8", (err, data) => {
    try {
      if (err) throw err;
      const resultado = contaPalavras(data);
      criaESalvaArquivo(resultado, destino);
    } catch (err) {
      console.log(trataErros(err));
    }
  });
}

// async function criaESalvaArquivo(listaPalavras, endereco) {
//   const arquivoNovo = `${endereco}/resultado.txt`;
//   const textoPalavras = JSON.stringify(listaPalavras);
//   try {
//     await fs.promises.writeFile(arquivoNovo, textoPalavras);
//     console.log(`Arquivo criado em: ${arquivoNovo}`);
//   } catch (error) {
//     throw error;
//   }
// }

function criaESalvaArquivo(listaPalavras, endereco) {
  const arquivoNovo = `${endereco}/resultado.txt`;
  const textoPalavras = montaSaidaArquivo(listaPalavras);

  fs.promises
    .writeFile(arquivoNovo, textoPalavras)
    .then(() => {
      console.log(`Arquivo criado em: ${arquivoNovo}`);
    })
    .catch((error) => {
      throw error;
    })
    .finally(() => console.log("operação concluída"));
}
