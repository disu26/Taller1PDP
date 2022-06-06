import React, { useState } from "react";
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

  const onChange = ({ target }) => {
    setFrmState({ ...frmState, [target.name]: target.value });
    setErrorNombreMessage(false);
    setErrorCantidadMessage(false);
    setErrorTipoMovimientoMessage(false);
  };

  const cancelar = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (frmState.nombre.length > 0 && frmState.cantidad > 0 && frmState.movimiento.length > 0) {

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

  return (
    <form onSubmit={handleSubmit}>
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
          Agregar Movimiento
        </button>
      </div>
    </form>
  );
};

export default Form;
