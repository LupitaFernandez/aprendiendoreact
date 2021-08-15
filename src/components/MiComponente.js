import React, {Component} from 'react'; //importar modulo de React 
//import React from 'react'; esta bien de ambas formas, otra opcion

class MiComponente extends Component { //definir clase del nombre del archivo, extends del componente. 
//class MiComponente extends React.Component

    render (){ //render es el que se encarga de mostrar información por pantalla

        let receta = {//Json
            nombre: 'Pizza',
            ingredientes: ['Tomate', 'Queso', 'Jamon cocido'], //Array
            calorias: 400,
        };

        return(//siempre va a devolver algo.
            <div className='mi-componente'>
                <h1>Hola, soy el primer componente de la ejercitación. </h1>
                <h2>Estoy probando {'una receta nueva: ' + receta.nombre} </h2>
                <ol>
                    {
                        receta.ingredientes.map((ingredientes, i) =>{ //mapeo, bucle
                            console.log (ingredientes)// key porque es dinamico y se agrega
                            return (
                                <li key= {'i'}> 
                                    {ingredientes}
                                </li>
                            )
                    })
                    }
                </ol>

                <hr />
            </div>
            
        );
    }

}

export default MiComponente; //exportarlo para poder usarlo 