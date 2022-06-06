import Header from "./components/Header"
import Form from "./components/Form";
import ListaMovimientos from "./components/ListaMovimientos";
import ModalGasto from "./components/ModalGasto";
import ModalIngreso from "./components/ModalIngreso";
import { useState } from "react";

function App() {

  const [registros, setRegistros] = useState(null);

  const [registro, setRegistro] = useState("");

  const [edit, setEdit] = useState(null);

  const [movimientos, setMovimientos] = useState([]);

  const saldoInicial = 10000000;

  const [saldoFinal, setSaldoFinal] = useState(saldoInicial);

  const [errorGasto, setErrorGasto] = useState(false);

  const [registroExitoso, setRegistroExitoso] = useState(false);
  
  const openModal = () => {
    setErrorGasto(true);
  }

  const closeModal = () => {
    setErrorGasto(false);
  }

  const openModalRegistro = (newRegistro) => {
    setRegistroExitoso(true);
    setRegistros(newRegistro);
    
  }

  const closeModalRegistro = () => {
    setRegistroExitoso(false);
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
            openModalRegistro={openModalRegistro}
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
      <ModalIngreso registroExitoso={registroExitoso} closeModalRegistro={closeModalRegistro} registros={registros} />

    </div>
  );
}

export default App;
