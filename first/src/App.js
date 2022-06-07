import logo from './logo.svg';
import './App.css';

function App() {
    const fname = "Sumant Chaudhary"  //if we don't use const here it doesn't compile don't know why
    const age = 19 
  //inside the return e have JSX which lookd like HTML
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        <h1>Name: {fname}</h1>
        <p>Age: {age}</p>
      </header>
    </div>
  );
}

export default App;
