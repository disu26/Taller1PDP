import React from 'react'
import { FcCancel } from 'react-icons/fc';
import { GiPencil } from "react-icons/gi";

const Movimiento = (props) => {
  return (
    <ul className='list-group'>
      <li className='list-group-item'>
          <div className='d-inline'>
            <button className='btn btn-secondary mx-2'>
              <FcCancel />
            </button>
            <button className='btn btn-secondary mx-2'>
              <GiPencil />
            </button>
          </div>

          <div className='d-inline mx-3'>
            {props.movimiento.nombre}
            <div className='d-inline mx-3 bg-success text-white rounded-pill'>
              {props.movimiento.cantidad}
            </div>
            
          </div>
      </li>
    </ul>
  )
}

export default Movimiento