/*
Integração com Back, através do axios, com informações adicionadas manualmente
*/
import { useEffect, useState } from "react"

import { Navigate } from 'react-router-dom'

import {
    Typography,
    Box,
    Paper,
    Button
} from '@mui/material'

import { DataGrid } from '@mui/x-data-grid'

import axios from 'axios'

const url = "/app/produtos"
const url_base = process.env.REACT_APP_URL_BACK + url

const colunas = [
    { field: "_id", headerName: "", hide: true},
    { field: "nome", headerName: "Nome", width: 180 },
    { field: "preco", headerName: "Preço unitário" },
    { field: "quantidade", headerName: "Qtd Estoque" },
    { field: "descricao", headerName: "Descrição", width: 230 }
]

const ProdutosListar = () => {
    const [ produtos, setProdutos ] = useState([])
    //then.....     setProdutos( retorno.data )
    useEffect( () =>{
      const receberProdutos = async() => {
        await axios.get(url_base,
                {
                    headers: {
                        "Authorization": "Bearer " + localStorage.getItem("BackEndAulaToken")
                    }
                })
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