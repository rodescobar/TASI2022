import React, { useState, useEffect } from 'react'
import { BrowserRouter } from "react-router-dom"

import {
    CssBaseline,
    Paper
}
from '@mui/material'

import { ThemeProvider } from '@mui/material/styles'

import Menu from './components/menu'
import Rotas from './routes'

import { themeD, themeL } from './components/themes'

const App = () => {

    const [ tema, setTema ] = useState( true )

    useEffect(() => {
        var gambi = true
        if (localStorage.getItem("tema") == "false")
            gambi = false
        
        setTema( gambi )
    }, [])

    const AlterarTema = ( valor ) => {
        localStorage.setItem("tema", valor)
        setTema(valor)
    }

    return (
        <BrowserRouter>
            <CssBaseline />
            <ThemeProvider theme={ (tema) ? (themeL) : (themeD)  }>
                <Paper>
                    <Menu callback={ AlterarTema } status={ tema } />
                    <Rotas />
                </Paper>
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default App