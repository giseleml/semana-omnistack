import React, { useEffect, useState } from 'react'
import api from './services/api'
import DevItem from './components/DevItem'
import DevForm from './components/DevForm'

import './global.css'
import './App.css'
import './sidebar.css'
import './main.css'

    function App() {
    const [devs, setDevs] = useState([])

    useEffect(() => {
        async function loadDevs() {
            const response = await api.get('/devs')
            setDevs(response.data)
        }
        loadDevs()
    }, [])

    async function handleAddDev(data) {
        const response = await api.post('/devs', data)

        setDevs([...devs, response.data])
    }

    return(
        <div id="app">
            <aside>
                <strong>Cadastrar</strong>
                <DevForm onSubmit={handleAddDev}/>
            </aside>
            <main>
                <ul>
                    {devs.map(dev => (
                        <DevItem dev={dev} key={dev._id}/>
                    ))}
                </ul>
            </main>
        </div>
        
    )
}

export default App

/* 3 conceitos principais de React

    Componente [
        Função que retorna algum conteúdo HTML, CSS ou JS
        Blocos que se repetem e podem ser isolados de outros sem interferir neles
        Regra: um componente por arquivo (Criar pasta components)
    ]

    Propriedade [
        Informações que o componente Pai passa para o componente Filho
        No HTML é chamado de atributos; exemplo: title.
        O componente, sendo uma função, recebe as props por parâmetro
    ]

    Estado [
        Informações mantidas pelo componente
        useState(<valorInicial>) retorna uma variável e uma função que atualiza o valor da variável
        |_exemplo: const [ counter, setCounter ] = useState(0)
        |_como atualiza-lo: setCounter(counter + 1)

        Por que o estado não pode ser alterado diretamente?
        |_ Imutabilidade: Nunca alterar um dado, sempre criar um novo à partir do seu valor anterior
    ]
    

*/

/* EXTRAS

 > Para colocar vários componentes juntos pode-se substituir a <div></div> por 
 Fragment (apenas <>Componentes</>)

 > Toda função própria de um componente deve ser criada dentro dele

 */