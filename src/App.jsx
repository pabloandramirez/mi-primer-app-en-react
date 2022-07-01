import logo from './logo.svg';
import './App.css';
import React from 'react';

class Imagen extends React.Component {
  render (){
    return(<img src={logo} className="App-logo" alt="logo" />);
  }
}

function Parrafo (props) {
  return (
    <p> {props.contenido} </p>
  )
}

const Anchor = () => {
  return(
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Imagen />
        <Parrafo contenido ='Edit src/App.js and save to reload' />
        <Anchor />
      </header>
    </div>
  );
}

export default App;
