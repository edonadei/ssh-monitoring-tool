import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Monitoring tool</h1>
        <form>
          <label>
            Name
            <input type="text" name="name" />
            <br />
            Name
            <input type="text" name="name" />
            <br />
            Name:
            <input type="text" name="name" />
            <br />
            Name:
            <input type="text" name="name" />
            <br />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <p>
          Edit <code>src/App.js</code> and save to reload !
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a>
          
        </a>
      </header>
    </div>
  );
}

export default App;
