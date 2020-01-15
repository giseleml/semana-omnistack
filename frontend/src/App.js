import React from 'react'

import './global.css'
import './App.css'
import './sidebar.css'
import './main.css'

function App() {
    return(
        <div id="app">
            <aside>
                <strong>Cadastrar</strong>
                <form>
                    <div className="input-block">
                        <label htmlFor="github_username">Usuário do Github</label>
                        <input name="github_username" id="github_username" required></input>
                    </div>

                    <div className="input-block">
                        <label htmlFor="techs">Tecnologias</label>
                        <input name="techs" id="techs" required></input>
                    </div>

                    <div className="input-group">
                        <div className="input-block">
                            <label htmlFor="latitude">Latitude</label>
                            <input name="latitude" id="latitude" required></input>
                        </div>

                        <div className="input-block">
                            <label htmlFor="longitude">Longitude</label>
                            <input name="longitude" id="longitude" required></input>
                        </div>
                    </div>
                    <button type="submit">Salvar</button>
                </form>
            </aside>
            <main>
                <ul>
                    <li className="dev-item">
                        <header>
                            <img src="https://i.4pcdn.org/x/1558099179561.png" alt="user profile"></img>
                            <div className="user-info">
                                <strong>Gisele Mara</strong>
                                <span>React, React Native, Node.js</span>
                            </div>
                        </header>
                        <p>I am a very interesting person look at my profile</p>
                        <a href="#">Acessar perfil no GitHub</a>
                    </li>
                    <li className="dev-item">
                        <header>
                            <img src="https://i.4pcdn.org/x/1558099179561.png" alt="user profile"></img>
                            <div className="user-info">
                                <strong>Gisele Mara</strong>
                                <span>React, React Native, Node.js</span>
                            </div>
                        </header>
                        <p>I am a very interesting person look at my profile</p>
                        <a href="#">Acessar perfil no GitHub</a>
                    </li>
                    <li className="dev-item">
                        <header>
                            <img src="https://i.4pcdn.org/x/1558099179561.png" alt="user profile"></img>
                            <div className="user-info">
                                <strong>Gisele Mara</strong>
                                <span>React, React Native, Node.js</span>
                            </div>
                        </header>
                        <p>I am a very interesting person look at my profile</p>
                        <a href="#">Acessar perfil no GitHub</a>
                    </li>
                    <li className="dev-item">
                        <header>
                            <img src="https://i.4pcdn.org/x/1558099179561.png" alt="user profile"></img>
                            <div className="user-info">
                                <strong>Gisele Mara</strong>
                                <span>React, React Native, Node.js</span>
                            </div>
                        </header>
                        <p>I am a very interesting person look at my profile</p>
                        <a href="#">Acessar perfil no GitHub</a>
                    </li>
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