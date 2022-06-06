import React from 'react'
import { FcCancel } from 'react-icons/fc';
import { GiPencil } from "react-icons/gi";

const Movimiento = (props) => {

  const cantidad = Number(props.movimiento.cantidad);
  
  return (
    <ul className='list-group mt-3'>
      <li className='list-group-item'>
          <div className='d-inline'>
            <button className='btn btn-secondary mx-2' onClick={() => props.deleteMovimiento(props.movimiento)}>
              <FcCancel />
            </button>
            <button className='btn btn-secondary mx-2'>
              <GiPencil />
            </button>
          </div>

          <div className='d-inline mx-3'>
            {props.movimiento.nombre}
            <div className={`d-inline mx-3 ${props.movimiento.tipoMovimiento === 'ingreso' ? `bg-success`: `bg-danger`} text-white rounded-pill`}>
              <p className='text-white d-inline mx-2'>{cantidad.toLocaleString('en')}</p>
            </div>
          </div>
      </li>
    </ul>
  )
}

export default Movimiento