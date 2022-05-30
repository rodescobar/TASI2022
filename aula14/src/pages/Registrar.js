import { useState } from 'react'
import axios from "axios"
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

import { 
    TextField,
    FormControl,
    Button,
} from '@mui/material'

const Registrar = () => {
    const [ usuario, setUsuario ] = useState("")
    const [ senha, setSenha ] = useState("")
    const [ confirma, setConfirma ] = useState("")

    const EfetuarRegistro = async () => {
        var data = {
            usuario,
            senha,
            confirma
        }

        var url = "https://backendaula.herokuapp.com/app/registrar"
        await axios.post(
                    url,
                    data
                ).then( retorno => {
                    //Se existe o indice erro
                    if ( retorno.data.erro ) {
                        Swal.fire({
                            title: retorno.data.erro,
                            icon: 'error',
                            confirmButtonText: 'OK'
                        })
                        return false
                    }

                    Swal.fire({
                        title: "Login criado com sucesso",
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                })
    }

    return ( 
        <div style={{ 
            display: 'flex',
            flex: 1,
            backgroundColor: "blue",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <div style={{
                textAlign: "center",
                background: "white",
                width: "40%",
                padding: "10px"
            }}>
                <h3>Registrar</h3>
                <FormControl fullWidth  sx={{ m: 1 }}>
                    <TextField 
                        placeholder='Usuário'
                        title='Usuário'
                        value={ usuario }
                        onChange={ (e) => setUsuario(e.target.value) }
                    />
                </FormControl>
                <FormControl fullWidth  sx={{ m: 1 }}>
                    <TextField 
                        placeholder='Senha'
                        title='Senha'
                        type="password"
                        value={ senha }
                        onChange={ (e) => setSenha(e.target.value) }
                    />
                </FormControl>
                <FormControl fullWidth  sx={{ m: 1 }}>
                    <TextField 
                        placeholder='Confirma senha'
                        title='Confirma senha'
                        type="password"
                        value={ confirma }
                        onChange={ (e) => setConfirma(e.target.value) }
                    />
                </FormControl>

                <Button 
                    variant="contained"
                    onClick={ () => EfetuarRegistro() }
                >
                    Registrar
                </Button>
            </div>
        </div>
    )
}

export default Registrar