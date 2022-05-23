import { Route, Routes, Navigate } from 'react-router-dom'

import { useEffect, useState } from 'react'
import axios from 'axios'

import Login from './pages/Login'
import Registrar from './pages/Registrar'

import ProdutosListar from './pages/produtos/listar'
import ProdutoNovo from './pages/produtos/novo'

const RotaPrivada = ({ Componente }) => {

    const logado = localStorage.getItem("BackEndAulaToken")

    return logado ? Componente : <Navigate to="/" />
}

const Rotas = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={ <Login /> } />
                <Route path="/registrar" element={ <Registrar /> } />

                <Route path="/admin/produtos" element={ <RotaPrivada Componente={ <ProdutosListar /> } /> } />
                <Route path="/admin/produto/novo" element={ <RotaPrivada Componente={ <ProdutoNovo /> } /> } />
            </Routes>
        </div>
    )
}

export default Rotas

