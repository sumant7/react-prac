import logo from './logo.svg';
import './App.css';

function App() {
    const fname = "Sumant Chaudhary"  //if we don't use const here it doesn't compile don't know why
    const age = 19 
    const p = "Enter Data"
  //inside the return we have JSX which lookd like HTML
  const country = ()=>{
    return "India"
  }
  const box = <input placeholder={p} autoComplete></input>
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
        <h1>Name: {fname}</h1> {/*inside {} we can use javascript and comment like this*/}
        <p>Age: {age}</p>
        <p>Country: {country()}</p>
        {box}
      </header>
    </div>
  );
}

export default App;
