let readline = require('readline-sync')
let anoNasc = readline.question("Informe seu ano de nascimento: ")

let idade = 2025-anoNasc

if (idade>=18){
    console.log("Você já pode ser preso!")
} else {
    console.log("Você é menor de idade.")
}