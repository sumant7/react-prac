import logo from './logo.svg';
import './App.css';


//we don't need to write the JSX, we can write the Js code also like React.createlement etc because while compiling JSX gets converted to Js only (see /babeljs.io) but JSX is simpler

//note there should always be 1 and only 1 root element which contains everything, here its <div className="App"> 

//we can also create custom components

function App() {
  const o = {
    name: "Sumant Chaudhary",
    age: 19,
  }
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
        <h1>Name: {fname}</h1> {/*inside {} we can use javascript things which return stuff like map,ternery opertor, variables but not if else for loops etc and comment like this*/}
        <p>Age: {age}</p>
        <p>Country: {country()}</p>
        {box}
        {o.name}
      </header>
    </div>
  );
}

export default App;
