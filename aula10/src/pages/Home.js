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
            <br />
            <Link to="/card">Teste card</Link>
            <br />
            <Link to="/produto/HGF45OP">Produto HGF45OP</Link>
            <br />
            <Link to="/produto/27">Produto 27</Link>
        </div>
    )
}

export default Home