import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from "uuid";


const Form = (props) => {

    const [errorNombreMessage, setErrorNombreMessage] = useState(false);

    const [errorCantidadMessage, setErrorCantidadMessage] = useState(false);

    const [frmState, setFrmState] = useState({movimiento: '', nombre: '', cantidad: Number});

    const onChange = ({target}) => {
        setFrmState({...frmState, [target.name]: target.value});
        setErrorNombreMessage(false);
        setErrorCantidadMessage(false);
    }

    const cancelar = (e) => {
        e.preventDefault();
        e.target.reset();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(frmState.nombre.length > 0 && frmState.cantidad > 0){
            const newRegistro = {id: uuidv4, nombre: frmState.nombre, cantidad: frmState.cantidad, 
            tipoMovimiento: frmState.movimiento};
            console.log(newRegistro);
            props.setMovimientos([...props.movimientos, newRegistro]);
            e.target.reset();
            setFrmState({nombre: '', cantidad: Number});
            return;
        }

        if(frmState.nombre.length === 0){
            setErrorNombreMessage(true);
            return;
        }
        
        setErrorCantidadMessage(true);
    }

  return (
    <Fragment>
        <form onSubmit={handleSubmit}>
            <div className='form-group mt-2'>
                <label>Tipo Movimiento</label>
                <select onChange={onChange} name='movimiento' className="form-select">
                    <option default value="vacio">---</option>
                    <option value="ingreso">Ingreso</option>
                    <option value="gasto">Gasto</option>
                </select>
            </div>
            <div className='form-group mt-2'>
                <label>Nombre</label>
                <input type="text" name="nombre" className='form-control'
                    onChange={onChange}
                />
                <span>
                    {errorNombreMessage ? 'El Nombre no puede estar vacío' : ''}
                </span>
            </div>
            <div className='form-group'>
                <label>Cantidad</label>
                <input type="number" name='cantidad' className='form-control'
                    onChange={onChange}
                />
                <span>
                    {errorCantidadMessage ? 'La cantidad debe ser mayor a cero' : ''}
                </span>
            </div>            
            <div className='form-group mt-2'>
                <button onClick={cancelar} className='btn btn-danger mx-2'>Cancelar</button>
                <button type= 'submit' className='btn btn-primary'>Agregar Movimiento</button>
            </div>
        </form>
    </Fragment> 
  )
}

export default Form