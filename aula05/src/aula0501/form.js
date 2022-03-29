import React, { useState, useEffect } from 'react'

const Form = ({ ativo, comentario }) => {
    const [ nome, setNome ] = useState("")
    const [ comment, setComment ] = useState("")
    const [ email, setEmail ] = useState("")

    useEffect( () => {
        setNome( comentario.name )
        setComment( comentario.body )
        setEmail( comentario.email )
    }, [ ativo ] )

    const AlteraNome = (e) => {
        setNome( e.target.value )
    }


    var formulario = ( !ativo ) ? ("") : (
        <div style={{ background: "green", padding: "10px" }}>
            <h2>Alteração de comentário</h2>
            <span>Nome</span>
            <input type="text" 
                value={ nome } 
                onChange={ (e) => AlteraNome(e) }
            />

            <span>Comentário</span>
            <input type="text" value={ comment } onChange={ (e) => { setComment( e.target.value) }}/>

            <span>E-mail</span>
            <input type="text" value={ email }/>
        </div>        
    ) 
    return (
        <div>
            { formulario }
        </div>
    )

}

export default Form