import React from 'react'

const json = require('./banco.json')

const Arquivo = () => {
    const Mostrar = () => {
        console.log( json.login )
        console.log( json.senha )
        console.log( json.lista[2] )

        console.log( json.objetos[1].modelo )
    }

    return (
        <div>
            <input type="button"
                value="Clique"
                onClick={ () => Mostrar() }
            />
        </div>
    )
}

export default Arquivo