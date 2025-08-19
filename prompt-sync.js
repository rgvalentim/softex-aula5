import promptSync from "prompt-sync"
const prompt = promptSync({sigint:true})

let nome = prompt("Digite o seu nome: ")

if (nome.trim().toLowerCase() == "robson") {
    console.log("Pode passar.")
}