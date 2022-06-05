import Header from "./components/Header"
import Form from "./components/Form";
import ListaMovimientos from "./components/ListaMovimientos";
import logo from './assets/logoPoli.png'
import { useState } from "react";

function App() {

  const [registro, setRegistro] = useState('');
  const [movimientos, setMovimientos] = useState([]);
  const [edit, setEdit] = useState(null);

  return (
    <div className='container mt-5'>
      <Header 
        logo= {logo}
        movimientos= {movimientos}
      />
      <div className="flex-row">
        <div className="flex-large">
          <h2>Registro</h2>
          <Form 
            movimientos= {movimientos}
            setMovimientos= {setMovimientos}
          />
        </div>
        <div className="flex-large">
          <h2>Movimientos</h2>
          <ListaMovimientos movimientos={movimientos} setMovimientos= {setMovimientos} />
        </div>
      </div>
    </div>
  );
}

export default App;
