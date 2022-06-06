import Header from "./components/Header"
import Form from "./components/Form";
import ListaMovimientos from "./components/ListaMovimientos";
import ModalGasto from "./components/ModalGasto";
import { useState } from "react";

function App() {

  const [movimientos, setMovimientos] = useState([]);

  const saldoInicial = 10000000;

  const [saldoFinal, setSaldoFinal] = useState(saldoInicial);

  const [errorGasto, setErrorGasto] = useState(false);

  const openModal = () => {
    setErrorGasto(true);
  }

  const closeModal = () => {
    setErrorGasto(false);
  }

  return (
    <div className='container mt-5'>
      <Header 
        saldoInicial= {saldoInicial}
        saldoFinal= {saldoFinal}
      />
      <div className="flex-row">
        <div className="flex-large">
          <h2>Registro</h2>
          <Form 
            movimientos= {movimientos}
            setMovimientos= {setMovimientos}
            saldoFinal= {saldoFinal}
            setSaldoFinal= {setSaldoFinal}
            openModal= {openModal}
          />
        </div>
        <div className="flex-large">
          <h2>Lista Movimientos</h2>
          <ListaMovimientos movimientos={movimientos} setMovimientos= {setMovimientos} />
        </div>
      </div>
      <ModalGasto errorGasto={errorGasto} closeModal={closeModal}/>      
    </div>
  );
}

export default App;
