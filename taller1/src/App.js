import Header from "./components/Header"
import Form from "./components/Form";
import ListaMovimientos from "./components/ListaMovimientos";
import ModalGasto from "./components/ModalGasto";
import { useState } from "react";

function App() {

  const [registro, setRegistro] = useState("");

  const [edit, setEdit] = useState(null);

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
            registro={registro}
            setRegistro={setRegistro}
            movimientos= {movimientos}
            setMovimientos= {setMovimientos}
            saldoFinal= {saldoFinal}
            setSaldoFinal= {setSaldoFinal}
            openModal= {openModal}
            edit={edit}
            setEdit={setEdit}
          />
        </div>
        <div className="flex-large">
          <h2>Lista Movimientos</h2>
          <ListaMovimientos 
            movimientos={movimientos} 
            setMovimientos= {setMovimientos} 
            setEdit= {setEdit}
          />
        </div>
      </div>
      <ModalGasto errorGasto={errorGasto} closeModal={closeModal}/>      
    </div>
  );
}

export default App;
