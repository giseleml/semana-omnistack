const express = require('express')
const mongoose = require('mongoose')
const app = express()
const routes = require('./routes')
const cors = require('cors')

// use = valido para toda a aplicação (poderia se limitar à app.get, app.post etc). Assim o express entende o json.
app.use(cors())
app.use(express.json())

// Conecta a aplicação ao banco de dados
mongoose.connect('mongodb+srv://giselem:4pwHEmzspmJqc2cK@learningcluster-vkfrp.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

/* request = tudo que vem do front end | response = como o backend vai responde-lo
    no caso, com um JSON. Pode ser um texto, imagem, etc. 

    app.get('/', (req, res) => {
        console.log(req.body)
        return res.json({
            song: "Hello Bitches",
            singer: "CL",
            year: "2018",
            origin: "South Korea"
        })
    })

*/

//Agora todas as rotas da aplicação estão aqui, sendo importadas de routes.js
app.use(routes)

app.listen(8000)

/* SOBRE DEPENDÊNCIAS *

chocolatey to install yarn
nodemon watches changes in the file. yarn nodemon <file>. Or as a custom script yarn start
mongoDB: cluster não é uma base de dados, é um servidor, podendo ter várias bases de dados no mesmo servidor
mongoose: biblioteca que dá acesso ao node dentro da base de dados mongoDB, fazendo sua comunicação
axios: faz chamadas para outras API's
cors: cross origin resource sharing 
*/

/* SOBRE MÉTODOS HTTP:

    GET => recebe uma informação
    POST => cria uma informação (salvar produto, cadastrar usuário, etc.)
    PUT => editar uma informação
    DELETE => deletar uma informação

    Para utilizar os outros métodos além do GET precisamos de outra aplicação que
    não é só o navegador; (Postman ou Insomnia) São ferramentas para testar as rotas do backend

*/

/* SOBRE TIPOS DE PARÂMETROS 

    Query Params: na maioria das vezes utilizado no método GET. 
    Usados para filtrar buscas, ordenar, paginar, etc. e ficam visíveis na URL da aplicação.
    Acessados através de req.query
    Exemplo: http://localhost:8000/users?search=CL

    Route Params: na maioria das vezes usado em PUT e DELETE, pois procuram campos específicos.
    Usado para identificar um recurso para alteração OU remoção.
    Acessado através de req.params
    Exemplo: deletar usuário com o ID 1 (método DELETE) http://localhost:8000/users/1

    Body: utilizado principalmente no POST e PUT, pois ao criar uma informação é necessário
    enviar pelo corpo da requisição.


*/