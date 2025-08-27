const prompt = require("prompt-sync")()
const Usuario = require("./class/Usuario")
const users = []
let confirm = null

function setup() {
    const userName = prompt("Digite o nome do usuário: ")
    const userAge = parseInt(prompt("Digite a idade do usuário: "))
    const userEmail = prompt("Digite o email do usuário: ")
    const active = prompt("Usuário ativo? [S/N]: ").toUpperCase() === "S" ? true : false

    const newUser = new Usuario(userName, userAge, userEmail)

    newUser.ativo = active

    users.push(newUser)

    confirm = prompt("Deseja adicionar outro usuário? [S/N]")
}



do {
    setup()
} while (confirm.toUpperCase() === "S")

users.forEach((user) => {
    console.log(`
${user.saudacao}
${user.mostrarDados()}`)
})

console.log(`Total de usuários criados: ${Usuario.contarUsuarios()}
`)