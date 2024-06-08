import Card from "./components/Card/Card";
import "./App.css";

function App() {

  async function fetchData() {
    const apiUrl =
      "https://backend-integracao-com-frontend.onrender.com/personagens/";

    const response = await fetch(apiUrl);

    const data = await response.json();
  }
  fetchData();

  // Usando dados recebidos e gerando CARD dinamicamente:
  return (
    <div className="cards">
      {apiDevmons.map(function (meuDevmon) {
        return (
          <Card
            key={meuDevmon.nome}
            item={meuDevmon}
            // imagem={meuDevmon.imagem} - Enviado iten separado
          />
        );
      })}
    </div>
  );
}
export default App;
