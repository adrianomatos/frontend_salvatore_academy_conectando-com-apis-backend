import Card from "./components/Card/Card";
import "./App.css";

function App() {
  // Simulando dados vindos de uma API
  const apiDevmons = [
    {
      nome: "Java",
      imagem: "https://salvatore.academy/devmon/1_java.png",
    },
    {
      nome: "Kotlin",
      imagem: "https://salvatore.academy/devmon/2_kotlin.png",
    },
    {
      nome: "Android",
      imagem: "https://salvatore.academy/devmon/3_android.png",
    },
    {
      nome: "C",
      imagem: "https://salvatore.academy/devmon/4_c.png",
    },
    {
      nome: "C++",
      imagem: "https://salvatore.academy/devmon/5_cpp.png",
    },
    {
      nome: "C#",
      imagem: "https://salvatore.academy/devmon/6_csharp.png",
    },
    {
      nome: "JavaScript",
      imagem: "https://salvatore.academy/devmon/7_javascript.png",
    },
    {
      nome: "TypeScript",
      imagem: "https://salvatore.academy/devmon/8_typescript.png",
    },
    {
      nome: "Express",
      imagem: "https://salvatore.academy/devmon/9_express.png",
    },
    {
      nome: "NestJS",
      imagem: "https://salvatore.academy/devmon/10_nestjs.png",
    },
    {
      nome: "SQL",
      imagem: "https://salvatore.academy/devmon/11_sql.png",
    },
    {
      nome: "NoSQL",
      imagem: "https://salvatore.academy/devmon/12_nosql.png",
    },
    {
      nome: "Unity",
      imagem: "https://salvatore.academy/devmon/13_unity.png",
    },
  ];

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
