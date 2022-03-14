import Componente from './Componente'

function OlaMundo() {
  
  function click() {
    alert("Olá mundo!!!!!")
  }
  
  return (
    <div 
      style={{ color: "white", background: "green" }}
      onClick={ () => click() }
    >
      Olá mundo
    </div>
  )
}

const Nome = "Rodrigo"
//function NovoComponente() { }
const NovoComponente = () => {
  return (
    <div>
      <div>Novo componente</div>
      <Componente texto="Filho do novo componente" />
    </div>
  )
}

function App () {
  return (
    <div>
      <div>ITE - BAURU - SI</div>
      <br/>
      <div>Outra coisa</div>
      <OlaMundo />
      <NovoComponente />
      <Componente texto="Filho do APP" />
    </div>
  )
}

export default App