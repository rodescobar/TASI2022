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

const Rotas = () => {
    return (
        <div>
            <h1>Meu querido site</h1>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 128,
                        height: 128,
                    },
                }}
            >
                <Paper elevation={3}>
                    <Typography variant="label">Meu querido site</Typography>
                </Paper>
            </Box>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="clientes" element={<Cliente />} />
                <Route path="login" element={<Login />} />
            </Routes>

            <Button variant="contained" color="primary">Novo</Button>
            <Button variant="contained" color="warning">Cancelar</Button>
            <Button variant="contained" color="error">Excluir</Button>
        </div>
    )
}

export default Rotas

