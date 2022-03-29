import React, { useState, useEffect } from 'react'

const Form = ({ ativo, comentario }) => {
    const [ campos, setCampos ] = useState( {
                                            name: "",
                                            body: "",
                                            email: ""
                                        } )

    useEffect( () => {
        setCampos( comentario )
    }, [ ativo ] )

    const InputValue = (e) => {
        setCampos(
            [e.target.name] = e.target.value
        )
    }

    var formulario = ( !ativo ) ? ("") : (
        <div style={{ background: "green", padding: "10px" }}>
            <h2>Alteração de comentário</h2>
            <span>Nome 2</span>
            <input type="text" 
                value={ campos.name } 
                name="name"
                onChange={ (e) => InputValue(e) }
            />

            <span>Comentário</span>
            <input type="text" 
                value={ campos.body }
                name="body"
                onChange={ (e) => InputValue(e) }
            />

            <span>E-mail</span>
            <input type="text" 
                value={ campos.email }
                name="email"
                onChange={ (e) => InputValue(e) }
            />
        </div>        
    ) 
    return (
        <div>
            { formulario }
        </div>
    )

}

export default Form