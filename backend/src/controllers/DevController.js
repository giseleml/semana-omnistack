// Controllers ativam uma requisição e devolvem uma resposta

const axios = require('axios')
const Dev = require('../modules/dev')

const parseStringAsArray = require('../modules/utilidades/parseStringAsArr')

module.exports = {
    
    // Retorna uma lista com todos os devs
    async index(req, res) {
        const devs = await Dev.find()
        return res.json(devs)
    },

    async storeDev(req, res) {
        // pega essas informações dentro de req.body, porque não podem ser pegas pelo node
        const { github_username, tech_stack, latitude, longitude } = req.body
    
        // Transforma tech_stack em array e tira os espaços
        const techsArr = parseStringAsArray(tech_stack)
        
        // Verifica se o dev já foi cadastrado, evitando cadastro duplicado
        let dev = await Dev.findOne({ github_username })
        if (!dev) {
            // Aguardará a finalização dessa chamada antes de devolver resposta
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)
    
            // Name não é obrigatório, então caso não exista, por padrão pegara o valor do login
            const { name = login, avatar_url, bio } = apiResponse.data
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }

            // Retorno do banco de dados
             dev = await Dev.create({
                name, 
                github_username, 
                avatar_url, 
                bio, 
                tech_stack: techsArr,
                location
            })
        }
        return res.json(dev)
    }
}