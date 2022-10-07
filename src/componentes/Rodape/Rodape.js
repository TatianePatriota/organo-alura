import "./Rodape.css";

function Rodape() {
  return (
    <footer className="rodape">
      <section className="redes">
        <ul>
          <li>
            <a href="google.com">
              <img src="/imagens/fb.png" alt="Logo Facebook"></img>
            </a>
          </li>
          <li>
            <a href="google.com">
              <img src="/imagens/tw.png" alt="Logo Twitter"></img>
            </a>
          </li>
          <li>
            <a href="google.com">
              <img src="/imagens/ig.png" alt="Logo Instagram"></img>
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="/imagens/logo.png" alt="Logo organo"></img>
      </section>
      <section>
        <p>Desenvolvido por Alura.</p>
      </section>
    </footer>
  );
}

export default Rodape;
