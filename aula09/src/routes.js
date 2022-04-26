import { Route, Routes } from 'react-router-dom'

import {
    Box,
    Typography,
    Button,
    Paper
} from '@mui/material'

import Cliente from './pages/Cliente'
import Login from './pages/Login'
import Home from './pages/Home'
import Autocomplete from './pages/Autocomplete'

const Rotas = () => {
    return (
        <div>
            <h1>Meu querido site</h1>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="clientes" element={<Cliente />} />
                <Route path="login" element={<Login />} />
                <Route path="autocomplete" exact element={<Autocomplete />} />
            </Routes>
        </div>
    )
}

export default Rotas

