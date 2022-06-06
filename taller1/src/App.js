import Header from "./components/Header"
import Form from "./components/Form";
import EditForm from "./components/EditForm";
import ListaMovimientos from "./components/ListaMovimientos";
import ModalGasto from "./components/ModalGasto";
import ModalIngreso from "./components/ModalIngreso";
import { useState } from "react";

function App() {

  const [registros, setRegistros] = useState([]);

  const [registro, setRegistro] = useState("");

  const [editing, setEditing] = useState(false);

  const [currentMovimiento, setCurrentMovimiento] = useState({
    id: null, nombre: '', cantidad: '', tipoMovimiento: ''
  });

  const [movimientos, setMovimientos] = useState([]);

  const saldoInicial = 10000000;

  const [saldoFinal, setSaldoFinal] = useState(saldoInicial);

  const [errorGasto, setErrorGasto] = useState(false);

  const [registroExitoso, setRegistroExitoso] = useState(false);

  const updateMovimiento = (id, updateMovimiento) => {
    setMovimientos(movimientos.map((item) => item.id === id ? updateMovimiento : item));

    setEditing(false);
  }

  const editRow = (movimiento) => {
    setEditing(true);
    setCurrentMovimiento({
      id: movimiento.id, nombre: movimiento.nombre, cantidad: movimiento.cantidad, 
      tipoMovimiento: movimiento.tipoMovimiento
    });
  }
  
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
          {
            !editing ? (
              <div>
                <h2>Registro</h2>
                <Form 
                  movimientos= {movimientos}
                  setMovimientos= {setMovimientos}
                  saldoFinal= {saldoFinal}
                  setSaldoFinal= {setSaldoFinal}
                  openModal= {openModal}
                  openModalRegistro={openModalRegistro}
                />
              </div>
            ) : (
              <div>
                <h2>Editar Movimiento</h2>
                <EditForm 
                  registro={registro}
                  setRegistro={setRegistro}
                  movimientos= {movimientos}
                  setMovimientos= {setMovimientos}
                  saldoFinal= {saldoFinal}
                  setSaldoFinal= {setSaldoFinal}
                  currentMovimiento= {currentMovimiento}
                  updateMovimiento= {updateMovimiento}
                />
              </div>
            )
          }
        </div>
        <div className="flex-large">
          <h2>Lista Movimientos</h2>
          <ListaMovimientos 
            movimientos={movimientos} 
            setMovimientos= {setMovimientos} 
            editRow={editRow}
          />
        </div>
      </div>
      <ModalGasto errorGasto={errorGasto} closeModal={closeModal}/>      
      <ModalIngreso registroExitoso={registroExitoso} closeModalRegistro={closeModalRegistro} registros={registros} />

    </div>
  );
}

export default App;
