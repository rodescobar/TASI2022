import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h2>Você está na home</h2>
            <Link to="/clientes">Clientes</Link>
            
            <Link to="/login">Login</Link>
        </div>
    )
}

export default Home