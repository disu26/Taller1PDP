import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = (props) => {
  const [errorNombreMessage, setErrorNombreMessage] = useState(false);

  const [errorTipoMovimientoMessage, setErrorTipoMovimientoMessage] =
    useState(false);

  const [errorCantidadMessage, setErrorCantidadMessage] = useState(false);

  const [frmState, setFrmState] = useState({
    movimiento: "",
    nombre: "",
    cantidad: Number
  });

  const { edit, setRegistro} = props;
  useEffect(() => {
      console.log(edit)
      if(edit){
        setRegistro(edit.value);
      } else {
        setRegistro('');
      }
  }, [edit, setRegistro]);

  const onChange = ({ target }) => {
    setFrmState({ ...frmState, [target.name]: target.value });
    props.setRegistro(frmState);
    setErrorNombreMessage(false);
    setErrorCantidadMessage(false);
    setErrorTipoMovimientoMessage(false);
  };
  const cancelar = (e) => {
    e.preventDefault();
   document.getElementById('myform').reset();
    // document.getElementsByTagName("form").reset();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (frmState.nombre.length > 0 && frmState.cantidad > 0 && frmState.movimiento.length > 0) {
        if(props.edit){
            updateMovimiento(edit.id, props.registro)
            return;
        }

        const newRegistro = {
            id: uuidv4(),
            nombre: frmState.nombre,
            cantidad: frmState.cantidad,
            tipoMovimiento: frmState.movimiento,
        };

        if(frmState.movimiento === 'ingreso'){
            props.setSaldoFinal(Number(props.saldoFinal) + Number(frmState.cantidad));
        }

        if(frmState.movimiento === 'gasto'){
            if(props.saldoFinal - frmState.cantidad < 0 ){
                props.openModal();
                e.target.reset();
                setFrmState({ nombre: "", cantidad: Number, movimiento: "" });
                return;
            }
            props.setSaldoFinal(props.saldoFinal - frmState.cantidad);
        }

        props.setMovimientos([...props.movimientos, newRegistro]);
        e.target.reset();
        setFrmState({ nombre: "", cantidad: Number, movimiento: "" });
        props.openModalRegistro(newRegistro);
        return;
    }

    if (frmState.nombre.length === 0) {
      setErrorNombreMessage(true);
      return;
    }

    if (frmState.movimiento.length === 0) {
      setErrorTipoMovimientoMessage(true);
      return;
    }

    setErrorCantidadMessage(true);
  };

  const updateMovimiento = (id, nombre, cantidad, movimiento) => {
      const newMovimientos = props.movimientos.map((item) => 
        item.id === id ? { id, nombre, cantidad, movimiento } : item
      );
      props.setMovimientos(newMovimientos);
      props.setEdit(null);
  }

  return (
    <form onSubmit={handleSubmit} id="myform">
      <div className="form-group mt-2">
        <label>Tipo Movimiento</label>
        <select onChange={onChange} name="movimiento" className="form-select">
          <option default>---</option>
          <option value="ingreso">Ingreso</option>
          <option value="gasto">Gasto</option>
        </select>
        <span>
          {errorTipoMovimientoMessage ? "Seleccione un tipo de movimiento" : ""}
        </span>
      </div>
      <div className="form-group mt-2">
        <label>Nombre</label>
        {console.log(props.registro)}
        <input
          type="text"
          name="nombre"
          className="form-control"
          onChange={onChange}
        />
        <span>
          {errorNombreMessage ? "El Nombre no puede estar vacío" : ""}
        </span>
      </div>
      <div className="form-group">
        <label>Cantidad</label>
        <input
          type="number"
          name="cantidad"
          className="form-control"
          onChange={onChange}
        />
        <span>
          {errorCantidadMessage ? "La cantidad debe ser mayor a cero" : ""}
        </span>
      </div>
      <div className="form-group mt-2">
        <button onClick={cancelar} className="btn btn-danger mx-2">
          Cancelar
        </button>
        <button type="submit" className="btn btn-primary">
          {props.edit ? "Guardar Cambios" : 'Agregar Movimiento'}
        </button>
      </div>
    </form>
  );
};

export default Form;
