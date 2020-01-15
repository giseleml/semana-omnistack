// Na pasta modules são guardadas as entidades que a aplicação precisa, no caso desenvolvedores

const mongoose = require('mongoose')
const PointSchema = require('./utilidades/PointSchema')

/* O Schema é um objeto JSON que permite definir a forma e conteúdo dos documentos em uma collection;
Nele informamos os campos e tipos. */ 

const DevSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    tech_stack: [String],
    location: {
        type: PointSchema,
        index: '2dsphere'
    }
})

/* [String] => Armazena uma ou mais strings
    type está importando um schema que poderá ser utilizado para outros schemas também
   index => tipo de índice para ponto de longitude e latitude (esfera 2d, eixo X e Y)
*/

// Nome que será salvo no banco, schema
module.exports = mongoose.model('Dev', DevSchema)