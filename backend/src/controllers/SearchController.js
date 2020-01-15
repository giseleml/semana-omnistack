const Dev = require ('../modules/dev')

const parseStringAsArray = require('../modules/utilidades/parseStringAsArr')

//Busca todos os devs num raio de 10 km e filtra por tecnologias
module.exports = {
    async index(req, res) {
        
        const { latitude, longitude, tech_stack } = req.query

        const techsArr = parseStringAsArray(tech_stack)

        // retorna somente os devs que tem essas tecnologias numa distância máxima de 10km
        const filterDevs = await Dev.find({
                tech_stack: {
                    $in: techsArr
                },

                location: {
                    $near: {
                        $geometry: {
                            type: 'Point',
                            coordinates: [longitude, latitude]
                        },
                        $maxDistance: 10000
                    },
                }
            })

        return res.json({ filterDevs })
    }
}