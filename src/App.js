import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="starlingbank://oauth?client_id=aT6TPtsTJvhB1wzGbrRp&response_type=code&state=249a34c4-4588-449a-9ad9-f192581e52fd&/path&scope=account-list:read%20confirmation-of-funds:read"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
