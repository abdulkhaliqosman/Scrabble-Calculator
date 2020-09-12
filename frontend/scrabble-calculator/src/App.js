import React from 'react';
import logo from './logo.svg';
import './App.css';

import ScrabbleBoard from './components/scrabbleboard.tsx';

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
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>
      <body>
        <ScrabbleBoard />
      </body>
      <footer>
        © Aykay 2020. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
