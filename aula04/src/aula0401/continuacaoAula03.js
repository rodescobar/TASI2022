//continuidade do exmeplo
//agora iremos deixar a tabela dinamica
import React, { useState } from 'react'

const users = require("./users.json")

const Exemplo01 = () => {
    const [ pesquisar, setPesquisar ] = useState("")
    const [ userTabela, setUserTabela ] = useState( users )

    const handleText = ( e ) => {
        setPesquisar(e.target.value)
    }

    const handleClick = () => {
        //Retorna somente o objeto que obedecer a clausula do indexOf
        var fil = users.filter( objeto => {
            var nome = objeto.name.toUpperCase()
            return nome.indexOf( pesquisar.toUpperCase() ) > -1
        })

        setUserTabela( fil )
    }

    var tabela = userTabela.map( objeto => {
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