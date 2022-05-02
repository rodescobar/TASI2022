import { useState, useEffect } from 'react'
import {
    TextField,
    Autocomplete,
    Divider,
    Paper
} from '@mui/material'
import { DataGrid, ptBR } from '@mui/x-data-grid'

import axios from 'axios'



const Autocompletar = () => {

    const [dados, setDados] = useState([])
    const [tabela, setTabela] = useState([])
    const [ comentarios, setComentarios ] = useState([])

    const buscarNomes = async () => {
        var url = "https://jsonplaceholder.typicode.com/users"

        await axios.get(url)
            .then(retorno => {
                var vetor = retorno.data.map(linha => {
                    return { label: linha.name, id: linha.id, username: linha.username }
                })

                setDados(vetor)
            })
    }

    useEffect(() => {
        buscarNomes()
    }, []) //[] pq é na inicialização

    const handlePress = async (e, obj) => {
        if (obj.id != "" || obj.id != null) {
            var url = `https://jsonplaceholder.typicode.com/users/${obj.id}/posts`
            await axios.get(url)
                .then(ret => {
                    setTabela(ret.data)
                })
        }
    }

    const buscarComentarios = async (id) => {
        if ( id !== "") {
            var url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`

            await axios.get(url)
                    .then( ret => {
                        console.log( ret.data )
                        setComentarios( ret.data )
                    })
        }
    }
    return (
        <div>
            <h1>Autocompletar</h1>
            <Autocomplete
                onChange={(e, newValue) => handlePress(e, newValue)}
                options={dados}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Nomes" />}
            />
            <Divider />
            <Paper style={{ height: 400, width: '80%' }}>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={tabela}
                    columns={colunas}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    isRowSelectable = { (param) => {
                        buscarComentarios(param.row.id)
                    }}
                />
            </div>
            <br />
            <br />
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={ comentarios }
                    columns={ colunasComentarios }
                    pageSize={5}
                    rowsPerPageOptions={[2, 3, 5]}
                />
            </div>            
            </Paper>
        </div>
    )
}

export default Autocompletar

const colunas = [
    { field: 'id', headerName: 'id', width: 90 },
    { field: 'userId', headerName: 'Código Usuário', width: 190 },
    { field: 'title', headerName: 'Título', width: 290 },
    { field: 'body', headerName: 'Conteúdo', width: 350 }
]

const colunasComentarios = [
    { field: 'postId', headerName: 'PostId', width: 90 },
    { field: 'name', headerName: 'Nome', width: 190 },
    { field: 'email', headerName: 'E-mail', width: 290 }
]