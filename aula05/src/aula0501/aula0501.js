import React, { useState } from 'react'
import axios from 'axios'

import Form from './form'

const Aula0501 = () => {
    const [ dadosTabela, setDadosTabela ] = useState([])
    const [ tabelaOriginal , setTabelaOriginal ] = useState( [])

    const handleText = ( e ) => {
        var valor = e.target.value

        var dados = tabelaOriginal.filter( linha => {
            return ( linha.body.indexOf(valor) > -1 || linha.name.indexOf(valor) > -1 )
        })

        setDadosTabela( dados )
    }

    //npm install --save axios
    const handleClick = async () => {
        let url = "https://jsonplaceholder.typicode.com/comments"
        
        var data = await axios.get(url)
                        .then( retorno => {
                            return retorno.data
                        } )

        setDadosTabela( data )
        setTabelaOriginal( data )
    }

    const handleUpdate = ( objeto ) => {
        console.log( objeto )
    }

    var tabela = dadosTabela.map( objeto => {
        return (
            <tr key={ objeto.id }>
                <td>{ objeto.postId }</td>
                <td>{ objeto.name }</td>
                <td>{ objeto.email }</td>
                <td>{ objeto.body }</td>
                <td style={{
                        cursor: "pointer"
                    }}
                    onClick={ () => handleUpdate( objeto )}
                >
                        ✏️
                </td>
            </tr>
        )
    })

    return (
        <div>
            <h1>Lista de comentários</h1>

            <input type="button"
                value="Carregar comentários"
                onClick={ () => { handleClick() }}
            />
            <br />
            <input type="text"
                    placeholder='Pesquisar'
                    onChange={ (e) => handleText( e )}
            />
            <Form ativo={ true }/>
            <table border="1">
                <tr>
                    <td>ID</td>
                    <td>Nome</td>
                    <td>E-mail</td>
                    <td>Comentário</td>
                    <td>Opções</td>
                </tr>
                { tabela }
            </table>
        </div>
    )
}

export default Aula0501