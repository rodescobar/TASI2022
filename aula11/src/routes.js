import { Route, Routes } from 'react-router-dom'

import Login from './pages/Login'
import Registrar from './pages/Registrar'

const Rotas = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={ <Login /> } />
                <Route path="/registrar" element={ <Registrar /> } />
            </Routes>
        </div>
    )
}

export default Rotas

