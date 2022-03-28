import React, { useState } from 'react'
import axios from 'axios'

const Aula0402 = () => {
    const [ dadosTabela, setDadosTabela ] = useState([])

    const handleText = ( e ) => {
    }

    const handleClick = async () => {
        var url = "https://jsonplaceholder.typicode.com/comments"
        var tabela = await axios.get( url )
            .then( retorno => {
                console.log( retorno.data )
                return retorno.data
            })

        setDadosTabela( tabela )
    }

    const Login = async () => {
        var url="http://brozil.herokuapp.com/cliente/login"
        var data = {
                "email": "amanda@gmail.com",
                "senha": "123"
            }

        var retorno = await axios.post(
                                   url,
                                   data 
                                )
                                .then ( ret => {
                                    console.log( ret.data )
                                })

    }
    
    var tabela = dadosTabela.map( objeto => {
        return (
            <tr key={ objeto.id }>
                <td>{ objeto.postId }</td>
                <td>{ objeto.name }</td>
                <td>{ objeto.email }</td>
                <td>{ objeto.body }</td>
            </tr>
        )
    })

    return (
        <div>
            <h1>Lista de comentários</h1>

            <input type="button"
                value="Login"
                onClick={ () => { Login() }}
            />

            <input type="button"
                value="Carregar comentários"
                onClick={ () => { handleClick() }}
            />
            <input type="text"
                    placeholder='Pesquisar'
            />
            <table border="1">
                <tr>
                    <td>ID</td>
                    <td>Nome</td>
                    <td>E-mail</td>
                    <td>Comentário</td>
                </tr>
                { tabela }
            </table>
        </div>
    )
}

export default Aula0402