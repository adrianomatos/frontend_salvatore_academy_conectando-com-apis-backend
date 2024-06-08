import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";

function App() {
  const [devmons, setDevmons] = useState([]);

  async function fetchData() {
    const apiUrl =
      "https://backend-integracao-com-frontend.onrender.com/personagens/";
    const response = await fetch(apiUrl);
    const data = await response.json();
    setDevmons(data);
  }
  
	// Chama API só 1X
	useEffect(function(){
		fetchData();
	}, [])

  return (
    <div className="cards">
      {devmons.map(function (devmon) {
        return <Card key={devmon.nome} item={devmon} />;
      })}
    </div>
  );
}
export default App;
