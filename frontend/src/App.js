import React from 'react'

function App() {
    return(
        <div className="App">
            <header className="App-header">
                <p>
                    Edit <code>src/App.js</code> and save to reload
                </p>
                <h1>Hello world</h1>
            </header>
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