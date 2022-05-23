import { useState } from 'react'
import axios from "axios"
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

import { 
    TextField,
    FormControl,
    Button,
} from '@mui/material'

const url_base = process.env.REACT_APP_URL_BACK

const Login = () => {
    const [ usuario, setUsuario ] = useState("")
    const [ senha, setSenha ] = useState("")

    const EfetuarLogin = async () => {
        var data = {
            usuario,
            senha
        }

        var url = url_base + "/app/login"
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
                        title: "Login efetuado com sucesso",
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })

                    localStorage.setItem("BackEndAulaToken", retorno.data.token )
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
                <h3>Login</h3>
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
                <Button 
                    variant="contained"
                    onClick={ () => EfetuarLogin() }
                >
                    Efetuar Login
                </Button>

                <br />

                <Link to="/registrar">Não tem usuário, registre aqui!</Link>
            </div>
            
        </div>
    )
}

export default Login