import React, { useState } from 'react'

const users = require("./users.json")

const Exemplo01 = () => {
    const [ pesquisar, setPesquisar ] = useState("")

    const handleText = ( e ) => {
        setPesquisar(e.target.value)
    }

    const handleClick = () => {
        //Retorna todos os objetos, senão for igual ao if,
        //retorno undefined
        var teste = users.map( objeto => {
            if ( objeto.name.indexOf(pesquisar) > -1 )
                return objeto.name
        })

        //Retorna somente o objeto que obedecer a clausula do indexOf
        var fil = users.filter( objeto => {
            return objeto.name.indexOf(pesquisar) > -1
        })

        console.log( fil )
    }

    var tabela = users.map( objeto => {
        return (
            <tr key={ objeto.id }>
                <td>{ objeto.id }</td>
                <td>{ objeto.name }</td>
                <td>{ objeto.email }</td>
                <td>{ objeto.address.zipcode }</td>
                <td>{ objeto.address.geo.lat } / { objeto.address.geo.lng }</td>
            </tr>
        )
    })

    return (
        <div>
            <h1>Cadastro de usuários</h1>
            <input type="text"
                    placeholder='Pesquisar'
                    onChange={ (e) => { handleText(e) }}
            />
            <input type="button"
                value="Pesquisar"
                onClick={ () => { handleClick() }}
            />
            <table border="1">
                <tr>
                    <td>ID</td>
                    <td>Nome</td>
                    <td>E-mail</td>
                    <td>Zip</td>
                    <td>Lat/Long</td>
                </tr>
                { tabela }
            </table>
        </div>
    )
}

export default Exemplo01