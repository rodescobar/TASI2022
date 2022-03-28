import React, { useState } from 'react'

const posts = require("./arquivo.json")

const Exercicio = () => {

    const [ tabela, setTabela ] = useState( posts )

    const Pesquisar = ( event ) => {
        var digitado = event.target.value.toUpperCase()

        var retorno = posts.filter( item => {
            var title = item.title.toUpperCase()
            var body = item.body.toLowerCase()
            /*
            if ( title.indexOf( digitado ) > -1 || body.indexOf( digitado ) > -1 )
                return item
            */

            return ( title.indexOf( digitado ) > -1 || body.indexOf( digitado ) > -1 )
        })

        setTabela( retorno )
    }

    var mostraTabela = tabela.map( linha => {
        return (
            <tr key={ linha.id } >
                <td> { linha.title } </td>
                <td> { linha.body } </td>
            </tr>
        )
    })

    return (
        <div>
            <input 
                type="text" 
                placeholder="Pesquisar" 
                onChange={ (e) => Pesquisar(e) }
            />
            <br />
            <table border="1">
                <tr>
                    <td> Título </td>
                    <td> Conteúdo </td>
                </tr>
                { mostraTabela }
            </table>
        </div>
    )
}

export default Exercicio