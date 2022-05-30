/*
Fazer as chamadas do axios
Identificar o token
Adicionar o token header
Buscar minha url base

--> Devolver para o cliente a requisição
*/
import axios from 'axios'

var token = localStorage.getItem("BackEndAulaToken")
var bearer;

if ( token != undefined )
{
    bearer = `Bearer ${token}` 
}

const api = axios.create({
    baseURL: process.env.REACT_APP_URL_BACK,
    headers: { "Access-Control-Allow-Origin": "*"} //referente ao cors (chatão)
})

api.defaults.headers.common['Authorization'] = bearer
api.defaults.headers.common['Content-Type'] = 'application/json'

export default api