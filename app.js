
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const { request } = require('http')
const { response } = require('express')

const modulo = require('./modulo/modulo.js')

const app = express()

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    app.use(cors())
    next()
})

app.get('/v1/whatsapp/contatos/telefone', cors(), async function (request, response, next) {


    let numero = request.query.numero

    let statusCode
    let dadosContado = {}

    console.log(numero)

    if (numero == '' || numero == undefined) {
        statusCode = 400
        dadosContado.message = 'Não foi possivel processar, verifique o número de telefone novamente'
    } else {
        let listaDeContatos = modulo.getContatos(numero)

        if (listaDeContatos) {
            statusCode = 200
            dadosContado = listaDeContatos
        } else {
            statusCode = 404
        }
    }

    response.status(statusCode)
    response.json(dadosContado)

})

app.get('/v1/whatsapp/contatos/telefone/usuario', cors(), async function (request, response, next) {


    let numero = request.query.numero

    let statusCode
    let dadosContado = {}

    console.log(numero)

    if (numero == '' || numero == undefined) {
        statusCode = 400
        dadosContado.message = 'Não foi possivel processar, verifique o número de telefone novamente'
    } else {
        let usuario = modulo.getUsuario(numero)

        if (usuario) {
            statusCode = 200
            dadosContado = usuario
        } else {
            statusCode = 404
        }
    }

    response.status(statusCode)
    response.json(dadosContado)

})



app.listen(8080, function () {
    console.log('Servidor no ar')
})

 // acesso http://localhost:8080/v1/whatsapp/contatos/telefone/11987876567