import logo from './logo.svg';
import './App.css';

function App() {
  function constructor() {
    this.state = { apiResponse: "" };
  }

  function callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
  }

  function componentWillMount() {
    this.callAPI();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          this will be the landing page:
          TODO: create login functionality
          TODO: create homepage for authenticated users
        </p>
        <p className="App-intro">;{this.state.apiResponse}</p>
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
