import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="Weather-Box ">
      <Weather defaultCity="Rome" />
      <footer>
        Coded by{" "}
        <a
          href="https://github.com/estelle-prn"
          target="_blank"
          rel="noreferrer"
        >
          Estelle Peroni
        </a>
        , open-sourced on{" "}
        <a
          href="https://github.com/Estelle-Prn/Weather-Project"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        , and hosted on{" "}
        <a href="https://www.netlify.com" target="_blank" rel="noreferrer">
          Netlify{" "}
        </a>
      </footer>
    </div>
  );
}

export default App;
