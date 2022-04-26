import { createTheme } from '@mui/material/styles'

const themeD = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#ef660c',
        },
        secondary: {
            main: '#f50057',
        },
    },
});

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
});

export { themeD, themeL }