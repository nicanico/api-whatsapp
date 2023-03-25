/*
 * Objetivo: Criar uma API para disponibilizar dados para o projeto do wpp
 * Autor: Nicole Souza
 * Data: 17/03/2023
 * Versão: 1.0
 */

const contatos = require('./contatos.js')

const raiz = contatos.contatos['whats-users']

const getContatos = (numeroTelefone) => {
    const numeroCelular = numeroTelefone
    const contatosJSON = raiz.slice()
    const contatos = []
    const user = []
    let status

    if (numeroCelular != undefined) {
        contatosJSON.forEach(function (contato) {
            if (contato.number == numeroCelular) {

                console.log(contato.nickname)
                const userInformation = {}

                // userInformation.userNickname = contato.nickname
                // userInformation.userNumber = contato.number
                // userInformation.image = contato['profile-image']
                // userInformation.color = contato.background
                // user.push(userInformation)
                // contatos.push(user)
                const sender = contato.contacts
                sender.forEach(function (card) {

                    const listaDeContatos = {}

                    listaDeContatos.name = card.name
                    listaDeContatos.description = card.description
                    listaDeContatos.image = card.image
                    listaDeContatos.messages = card.messages

                    contatos.push(listaDeContatos)
                    status = true
                })

            }
        })
    } else {
        status = false
    }


    if (status) {
        console.log(contatos)
        return contatos
    } else {
        return false
    }

}

const getUsuario = (numeroTelefone) => {
    const numeroCelular = numeroTelefone
    const usuarioJSON = raiz.slice()
    const arrayUser = []
    const user = {}
    let status

    if (numeroCelular != undefined) {
        usuarioJSON.forEach(function (usuario) {
            if (usuario.number == numeroCelular) {
                user.number = usuario.number
                user.name = usuario.nickname
                user.image = usuario['profile-image']
                user.color = usuario.background

                status = true
            }
        })
    } else {
        status = false
    }


    if (status) {
        console.log(user)
        return user
    } else {
        return false
    }



}

//getContatos('11966578996')
getUsuario('11966578996')
// getMessagensContato('11966578996', 1)

module.exports = {
    getContatos,
    getUsuario
}