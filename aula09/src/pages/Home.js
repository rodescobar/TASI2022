import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h2>Você está na home</h2>
            <Link to="/clientes">Clientes</Link>
            <br />
            <Link to="/login">Login</Link>
            <br />
            <Link to="/autocomplete">Autocomplete</Link>
        </div>
    )
}

export default Home