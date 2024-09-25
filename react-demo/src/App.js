import '@wui/cc-operator-panel';
import logo from './logo.svg';
import './App.css';

const sipUrl = process.env.REACT_APP_PROXY_SIP_WSS

function App() {
  const style = {
    background: '#e5e5e5',
    color: '#000'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <rtu-operator-panel
          token="97b108f2-92a8-4caf-aaf2-39a5c1e3e0aa"
          sip-url={sipUrl}
          style={style}
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
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
