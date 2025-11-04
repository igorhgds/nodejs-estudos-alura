import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config"; 

export default defineConfig([
  // Config 1: GERAL (para todos os arquivos .js, padrão 'browser')
  { 
    files: ["**/*.{js,mjs,cjs}"], 
    // Esta é a forma mais moderna de fazer 'plugins' e 'extends'
    ...js.configs.recommended, 
    
    languageOptions: { 
      globals: {
        ...globals.browser // Padrão é 'browser'
      }
    }
  },
  
  // Config 2: ESPECÍFICO (para arquivos de backend, sobrescreve para 'node')
  { 
    files: ["**/server.js", "**/src/config/**/*.js"], 
    languageOptions: { 
      globals: {
        ...globals.node // 'node' é global APENAS para estes arquivos
      }
    } 
  }
]);