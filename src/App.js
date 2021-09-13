//import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Header from "./Header"
import React from 'react';

const Footer = React.createElement(
  'footer',
  {
    style : {textAlign: 'center'}
  },
  
  'ReactJs Mentoring Program Task by isha chohan'
  )

function App() {
  return (
    <div className="container">
      <Header title="HomeTask for the Reactjs Learn Program"/>
      <Counter />
      {Footer}
    </div>
   /* <div className="App">
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
          Hello World!!!
        </a>
      </header>

    </div> */
  )
}

export default App;
