import { useState } from 'react'

import {
    Box,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Switch,
    FormControlLabel
} from '@mui/material'

const Menu = ({ callback, status }) => {

    const [ checked, setChecked ] = useState( status )

    const handleChange = () => {
        callback( !checked )
        setChecked( !checked )
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="primary">
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
                    <FormControlLabel
                        label={ (checked == false) ? ("Claro") : ("Escuro") }
                        control={ 
                            <Switch
                                color="secondary"
                                checked={checked}
                                onChange={ handleChange }
                            />
                        }
                    />
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Menu