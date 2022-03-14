import React, { useState } from 'react'

const dados = require("./banco.json")

const estilos = {
    fontWeight: "bold",
    backgroundColor: "green",
    fontFace: "Arial",
    color: "blue"
}

const Aula0201 = () => {
    const Valida = () => {
        // [ "green", "blue", "yellow", "gray"  ]

        dados.objetos.map( function(item) {
                console.log( item )
            }
        )
    }

    return (
        <div style={ estilos }>
            <input type="button"
                value="Aqui"
                onClick={ () => Valida() }
            />
        </div>
    )
}

export default Aula0201