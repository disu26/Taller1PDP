import Header from "./components/Header"
import Form from "./components/Form";
import EditForm from "./components/EditForm";
import ListaMovimientos from "./components/ListaMovimientos";
import ModalGasto from "./components/ModalGasto";
import ModalIngreso from "./components/ModalIngreso";
import { useEffect, useState } from "react";

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

  const [searchValue, setSearchValue] = useState(null);

  const [searchedMovimientos, setSearchedMovimientos] = useState([]);

  useEffect(() => {
    if(searchValue === null){
      setSearchedMovimientos(movimientos);
    } else {
      setSearchedMovimientos(movimientos.filter(item => {
          const movimientoNombre = item.nombre.toLowerCase();
          const searchNombre = searchValue.busqueda.toLowerCase();
          const movimientoTipo = item.tipoMovimiento;

          if(searchValue.movimiento === 'todos'){
            return movimientoNombre.includes(searchNombre);
          }

          return movimientoNombre.includes(searchNombre) && movimientoTipo === searchValue.movimiento; 
          })
        )
    }
  }, [searchValue, movimientos])

  const updateMovimiento = (id, updateMovimiento) => {
    setMovimientos(movimientos.map((item) => item.id === id ? updateMovimiento : item));

    setEditing(false);
  }

  const cancelarEditar = () => setEditing(false);

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
                  openModal= {openModal}
                  cancelarEditar={cancelarEditar}
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
            searchedMovimientos={searchedMovimientos} 
            setMovimientos= {setMovimientos} 
            editRow={editRow}
            setSearchValue={setSearchValue}
          />
        </div>
      </div>
      <ModalGasto errorGasto={errorGasto} closeModal={closeModal}/>      
      <ModalIngreso registroExitoso={registroExitoso} closeModalRegistro={closeModalRegistro} registros={registros} />

    </div>
  );
}

export default App;
