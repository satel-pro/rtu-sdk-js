import '@wui/cc-operator-panel';
import logo from './logo.svg';
import './App.css';

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
          token="27bb4f56-6b89-4882-8bed-5ce031603819"
          sip-url="wss://192.168.232.147:5059"
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
