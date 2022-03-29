import React, { useState, useEffect } from 'react'

const Form = ({ ativo }) => {
    useEffect( () => {
        console.log( ativo )
    }, [ ativo ] )

    var formulario = ( !ativo ) ? ("") : (
        <div style={{ background: "green", padding: "10px" }}>
            <h2>Alteração de comentário</h2>
            <span>Nome</span>
            <input type="text" />

            <span>Comentário</span>
            <input type="text" />

            <span>E-mail</span>
            <input type="text" />
        </div>        
    ) 
    return (
        <div>
            { formulario }
        </div>
    )

}

export default Form