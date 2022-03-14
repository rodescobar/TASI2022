import { useState } from 'react'

const Input = ( { texto, callback } ) => {

    const [ valor, setValor ] = useState()

    return (
        <div>
            <label>{ texto }</label>
            <input type="text" 
                onChange={ (e) => setValor(e.target.value) }
            />
            <input 
                type="button" 
                value="Enviar"
                onClick={ () => callback(valor) } 
            />
        </div>
    )
}

export default Input