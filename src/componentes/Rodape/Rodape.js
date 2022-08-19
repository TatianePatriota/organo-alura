import "./Rodape.css"

function Rodape() {
  return (
    <footer className="rodape">
      <div className="redes">
        <a href="google.com"><img src="/imagens/fb.png" alt="Logo Facebook"></img></a>
        <a href="google.com"><img src="/imagens/tw.png" alt="Logo Twitter"></img></a> 
        <a href="google.com"><img src="/imagens/ig.png" alt="Logo Instagram"></img></a>
      </div>
      <div>
        <img src="/imagens/logo.png" alt="Logo organo"></img>
      </div>
      <div>
        <p>Desenvolvido por Alura.</p>
      </div>
    </footer>
  )
}

export default Rodape;