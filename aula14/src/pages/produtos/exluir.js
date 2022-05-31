import { useState } from 'react'

import {
    Typography,
    Box,
    TextField,
    Button
} from '@mui/material'

import { useLocation } from 'react-router-dom'

import Swal from 'sweetalert2'

import api from '../../service/apiaxios'

const url = '/app/produtos'

const ProdutoExcluir = () => {
    const recebido = useLocation()

    const [ id, setId ] = useState( recebido.state._id )
    const [ nome, setNome ] = useState( recebido.state.nome )
    const [ preco, setPreco ] = useState( recebido.state.preco )
    const [ quantidade, setQuantidade ] = useState( recebido.state.quantidade )
    const [ descricao, setDescricao ] = useState( recebido.state.descricao )

    console.log( recebido.state )

    const Excluir = async() => {
        await api.delete( '/app/produtos', 
                        { data: { id } } //o id é a const que veio do listar
                      )
                    .then( retorno => {
                        if ( retorno.data.erro )
                            Swal.fire({
                                title: retorno.data.erro,
                                icon: 'error',
                                confirmButtonText: 'OK'
                            })

                        if ( retorno.data.deletedCount ) {
                            Swal.fire({
                                title: "Produto excluído com sucesso",
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
                Alterar Produto
            </Typography>
            <TextField
                variant='outlined'
                label="Nome"
                disabled
                value={ nome }
            />
            <TextField
                variant='outlined'
                label="Preço"
                disabled
                value={ preco }
            />
            <TextField
                variant='outlined'
                label="Quantidade"
                disabled
                value={ quantidade }
            />
            <TextField
                variant='outlined'
                label="Descrição"
                disabled
                value={ descricao }
            />
            <Button 
                color="primary"
                variant="contained"
                onClick={ () => Excluir() }
            >
                Excluir Produto
            </Button>
        </Box>
    )
}

export default ProdutoExcluir