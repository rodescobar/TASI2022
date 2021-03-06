import { useEffect, useState } from "react"

import { Navigate } from 'react-router-dom'

import {
    Typography,
    Box,
    Paper,
    Button
} from '@mui/material'

import { DataGrid } from '@mui/x-data-grid'

import api from '../../service/apiaxios'

const url = "/app/produtos"

const colunas = [
    { field: "_id", headerName: "", hide: true},
    { field: "nome", headerName: "Nome", width: 180 },
    { field: "preco", headerName: "Preço unitário" },
    { field: "quantidade", headerName: "Qtd Estoque" },
    { field: "descricao", headerName: "Descrição", width: 230 },
    { 
        field: "", headerName: "Opções", width: 230,  
        renderCell: () => {
            <button>✏️</button>
        }
    },
]

//onCellClick

const ProdutosListar = () => {
    const [ produtos, setProdutos ] = useState([])
    //then.....     setProdutos( retorno.data )
    useEffect( () =>{
      const receberProdutos = async() => {
        await api.get( "/app/produtos" )
                .then( retorno => {
                    setProdutos( retorno.data )
                })
      }

      receberProdutos()
    },[])

    return (
        <Box style={{ padding: "10px" }}>
            <Typography variant="h5">
                Listagem de produtos
            </Typography>
            <Button 
                color="primary" 
                variant="contained"
                onClick={ () => { window.location="/admin/produto/novo" } }
            >
                Novo produto
            </Button>

            <div style={{ height: 500, width: '100%' }}>
                <DataGrid columns={ colunas } rows={ produtos } getRowId={row => row._id } />
            </div>
        </Box>
    )
}

export default ProdutosListar