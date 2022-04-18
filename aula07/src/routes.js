import { Route, Routes } from 'react-router-dom'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import Cliente from './pages/Cliente'
import Login from './pages/Login'
import Home from './pages/Home'

const Rotas = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            News
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <h1>Meu querido site</h1>
            <hr />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="clientes" element={<Cliente />} />
                <Route path="login" element={<Login />} />
            </Routes>
            <hr />
            <h3>Rodapé</h3>
        </div>
    )
}

export default Rotas

