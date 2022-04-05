import React from 'react'
import md5 from 'js-md5'
import axios from 'axios'

const url = process.env.REACT_APP_URL
const pu_key = process.env.REACT_APP_PKEY
const pr_key = process.env.REACT_APP_PRIVATE_KEY

const Principal = () => {

    const Marvel = async () => {
        var ts = Number(new Date())
        var concat = md5(ts + pr_key + pu_key)
    
        var acesso = "/v1/public/characters"

        var final = url + acesso + '?ts=' + ts + '&apikey=' 
                    + pu_key + '&hash=' + concat + '&limit=100&offset=500'
        
        await axios.get( final )
                    .then( retorno => {
                        console.log( retorno.data.data.results )
                    })

    }

    return (
        <div>
            <input type='button' onClick={ () => Marvel() } value="Carregar" />

            <div>
                <div style={{ width: "150px", textAlign: "center", margin: "10px", float: "left" }}>
                    <img 
                        style= {{ width: "150px" }}
                        src="http://i.annihil.us/u/prod/marvel/i/mg/8/e0/4ce5a0b3181d8.jpg" 
                    />
                    <label>Harry Osborn</label>
                </div>
            </div>
        </div>
    )
}

export default Principal
