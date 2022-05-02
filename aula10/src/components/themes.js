import { createTheme } from '@mui/material/styles'
import { ptBR } from '@mui/material/locale'
import { ptBR as hueBR } from '@mui/x-data-grid';

const themeD = createTheme(
    {
        palette: {
            mode: 'dark',
            primary: {
                main: '#ef660c',
            },
            secondary: {
                main: '#f50057',
            },
        },
    },
    hueBR,
    ptBR
);

const themeL = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#f3090c',
        },
        secondary: {
            main: '#f50057',
        },
    },
}, hueBR, ptBR);

export { themeD, themeL }