import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld';
import MeuComponente from './MeuComponente';
import MeuComponente2 from './MeuComponente2';

class App extends React.Component {
  render() {
    var linhas = [];
    const numero = 2;

      for(let i = 1; i <= 10; i++) {
      linhas.push(<MeuComponente2 primeiroNumero = {numero} segundoNumero = {i} resultado = {i * numero} />);
    }
    return <div>{linhas}</div>;

    // return <div><HelloWorld/></div>
    // return <div><MeuComponente nome='Paulo'/></div>
    
  }
}

export default App;
