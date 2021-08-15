import React from 'react';
import logo from './assets/img/logo.svg';
import './assets/css/App.css';

//Importar componentes
import MiComponente from './components/MiComponente';

function HolaMundo (nombre){
  var presentacion = (
    <div>
        <h2>Bienvenido, soy {nombre}</h2>
        <h3>Soy desarrolladora web junior</h3>
    </div>);
  return presentacion;
}

function App() {
  var nombre = "Guadalupe";
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola Mundo !
        </p>
        
        {HolaMundo (nombre)}

        <section className='componentes'>

        <MiComponente />

        </section>

      </header>


    </div>
  );
}

export default App;
