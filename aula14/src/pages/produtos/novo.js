import { useState } from 'react'

import {
    Typography,
    Box,
    TextField,
    Button
} from '@mui/material'

import Swal from 'sweetalert2'

import api from '../../service/apiaxios'

const url = '/app/produtos'

const ProdutoNovo = () => {
    const [ nome, setNome ] = useState("")
    const [ preco, setPreco ] = useState("")
    const [ quantidade, setQuantidade ] = useState("")
    const [ descricao, setDescricao ] = useState("")

    const Salvar = async() => {
        var data = {
            nome,
            preco,
            quantidade,
            descricao
        }

        await api.post( '/app/produtos', 
                        data
                      )
                    .then( retorno => {
                        if ( retorno.data._id ) {
                            Swal.fire({
                                title: "Produto adicionado com sucesso",
                                icon: 'success',
                                confirmButtonText: 'OK'
                            })
                            window.location = "/admin/produtos"
                        }
                    })
    }

    return (
        <Box style={{ padding: '10px' }}>
            <Typography variant="h5">
                Novo Produto
            </Typography>
            <TextField
                variant='outlined'
                label="Nome"
                onChange={ (e) => setNome(e.target.value) }
                value={ nome }
            />
            <TextField
                variant='outlined'
                label="Preço"
                onChange={ (e) => setPreco(e.target.value) }
                value={ preco }
            />
            <TextField
                variant='outlined'
                label="Quantidade"
                onChange={ (e) => setQuantidade(e.target.value) }
                value={ quantidade }
            />
            <TextField
                variant='outlined'
                label="Descrição"
                onChange={ (e) => setDescricao(e.target.value) }
                value={ descricao }
            />
            <Button 
                color="primary"
                variant="contained"
                onClick={ () => Salvar() }
            >
                Salvar Produto
            </Button>
        </Box>
    )
}

export default ProdutoNovo