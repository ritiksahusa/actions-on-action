import logo from "./logo.svg";
import "./App.css";

function App() {
  console.log("log check",process.env.REACT_APP_WELCOME_TEXT);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {process.env.REACT_APP_WELCOME_TEXT || "Github Actions Tutorial RSH"} - By
          DevOps Pro
        </p>
        <a
          className="App-link"
          href="https://youtube.com/@DevOpsPro"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn DevOps
        </a>
      </header>
    </div>
  );
}

export default App;
