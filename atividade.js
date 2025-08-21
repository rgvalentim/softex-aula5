let readline = require("readline-sync")
console.log("--------------------Formulario de cadastro-----------------------------")
let nome = readline.question("Qual o seu nome: ")
dia = readline.question("Informe o dia do seu nascimento: ")
mes = readline.question("Informe o mes de nascimento: ")
ano = readline.question("Informe o ano de nascimento: ")

console.log(`-------------------------${nome}-----------------------------`)
console.log(`Data de nascimento: \t${dia}/${mes}/${ano} \t\t\tProfissão:`)