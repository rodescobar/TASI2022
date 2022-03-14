import Input from './Input'

const App = () => {

    const Numero = ( x ) => {
        if ( isNaN(x) ) {
            console.log("Não é um número")
        }
        else 
            console.log("Parabens é um numero")
    }

    const Texto = ( x ) => {
        console.log(x);
    }

    const Cor = ( valor ) => {
        console.log("A cor é: " + valor);
    }

    return (
        <div>
            <h1>Inputs</h1>
            <Input texto="Digite uma string" callback={ Texto } />
            <hr/>
            <Input texto="Digite uma cor" callback={ Cor } />
            <hr/>
            <Input texto="Digite um numero" callback={ Numero } />
            <hr/>
        </div>
    )
}

export default App