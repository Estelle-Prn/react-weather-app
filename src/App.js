import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="Weather-Box ">
      <Weather defalutCity="Rome" />
      <footer>
        Coded by{" "}
        <a href="https://github.com/estelle-prn" target="_blank">
          Estelle Peroni
        </a>
        , open-sourced on{" "}
        <a
          href="https://github.com/Estelle-Prn/Weather-Project"
          target="_blank"
        >
          GitHub
        </a>
        , and hosted on{" "}
        <a href="https://www.netlify.com" target="_blank">
          Netlify{" "}
        </a>
      </footer>
    </div>
  );
}

export default App;
