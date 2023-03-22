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
    const arrayContatos = []
    let status

    if (numeroCelular != undefined) {
        contatosJSON.forEach(function (contato) {
            if (contato.number == numeroCelular) {

                console.log(contato.nickname)

                const sender = contato.contacts
                sender.forEach(function (card) {

                    const listaDeContatos = {}
                    listaDeContatos.name = card.name
                    listaDeContatos.description = card.description
                    listaDeContatos.image = card.image
                    arrayContatos.push(listaDeContatos)
                    status = true
                })

            }
        })
    } else {
        status = false
    }


    if (status) {
        return arrayContatos
    } else {
        return false
    }

}

const getMessagensContato = (numeroTelefone, indice) => {
    const numeroCelular = parseInt(numeroTelefone)
    const indiceContato = indice
    const contatosJSON = raiz.slice()
    const mensagensArray = []

    let status


    contatosJSON.forEach(function (contato) {
        if (numeroCelular == contato.number) {
            const contact = contato.contacts[indiceContato].messages

            contact.forEach(function (mensagens) {

                const mensagensJSON = {}
                mensagensJSON.sender = mensagens.sender
                mensagensJSON.content = mensagens.content
                mensagensJSON.time = mensagens.time
                mensagensArray.push(mensagensJSON)
                status = true
            })
        } else {
            return false
        }
    })

    console.log(mensagensArray)

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
                arrayUser.push(user)
                status = true
            }
        })
    } else {
        status = false
    }


    if (status) {

        return arrayUser
    } else {
        return false
    }



}

// getContatos('11966578996')
// getUsuario('11966578996')
// getMessagensContato('11966578996', 1)

module.exports = {
    getContatos,
    getMessagensContato,
    getUsuario
}