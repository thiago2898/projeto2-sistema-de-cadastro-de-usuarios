class Usuario {
    #ativo = false
    static totalUsuarios = 0

    constructor(nome, idade, email) {
        this.nome = nome
        this.idade = idade
        this.email = email

        Usuario.totalUsuarios++
    }

    get ativo() {
        return this.#ativo
    }

    get boasVindas() {
        return `Bem-vindo, ${this.nome}!`
    }

    set ativo(val) {
        if (typeof (val) !== 'boolean') {
            return
        } else {
            this.#ativo = val
        }
    }

    static contarUsuarios() {
        return this.totalUsuarios
    }

    mostrarDados() {
        let infs = ""

        infs += `Nome: ${this.nome}\n`
        infs += `Idade: ${this.idade}\n`
        infs += `Email: ${this.email}\n`
        infs += `Ativo: ${this.#ativo}\n`
        infs += `\n======================================\n`

        return infs
    }
}

module.exports = Usuario