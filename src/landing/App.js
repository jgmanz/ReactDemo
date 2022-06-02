import React, {useState, useEffect} from 'react';
import './App.css';
import {Menu} from './menu';

function App(props) {
  console.log('Properties ', props);
  const [nombre, setNombre] = useState('Jose');
  const [count, setCount] = useState(0);
  const handleTextChange = (e) =>{ 
    setNombre(e.target.value);
  }

  useEffect(() =>
  {
    document.title = `Hola bienvenido ${nombre} `;
    console.log('componen did mount');
  });
  
  console.log('Rendering component');
  return (
    <div>
      <Menu></Menu>
        <h1>Bienvenido a la clase de {props.materia}</h1>
        <h2>Hola {nombre} has dado click {count} veces </h2>
        <p>
          escribe tu nombre
          <input type="text" onChange={handleTextChange} value={nombre}></input>
          <button onClick={()=>setCount( count + 1 )}> Contador  </button>
        </p>
    </div>
  );
}
export default App;
