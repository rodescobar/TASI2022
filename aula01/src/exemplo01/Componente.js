//function Caixa( { texto }) {}
const Caixa = ( { texto } ) => {
    return (
        <div>
            <h1>{ texto }</h1>
            <br/>
            <input type="text" />
        </div>
    )
}

export default Caixa