import React, { useState } from 'react'
import Arquivo from './Arquivo'

const estilos = {
    fontWeight: "bold",
    backgroundColor: "green",
    fontFace: "Arial",
    color: "blue"
}

//Hooks React 16.*
const App = () => {
    var variavel_normal = 0

    const [ numero, setNumero ] = useState();

    const Incluir = () => {
        variavel_normal = variavel_normal + 1
        setNumero( numero + 1 )
    }

    return (
        <div style={ estilos }>
            <label>O número atual é: { numero }</label>
            <br/>
            <label> o valor da variável é: { variavel_normal } </label>
            <br/>
            <br/>
            <input type="button" onClick={ () => Incluir() } value="Clique" />
            <br />
            <br />
            <Arquivo />
        </div>
    )
}

export default App