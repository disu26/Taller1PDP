import React from 'react'
import Movimiento from './Movimiento'
import { FcSearch } from 'react-icons/fc';

const ListaMovimientos = (props) => {

    const deleteMovimiento = (movimiento) => {
        const newMovimientos = props.movimientos.filter((item) => item.id !== movimiento.id);
        props.setMovimientos(newMovimientos);
    };

  return (
    <div className='container'>
        <div className='input-group rounded'>
            <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            <span className="input-group-text border-0 bg-black" id="search-addon">
                <FcSearch />
            </span>
            <div className='form-check mx-2'>
                <input className="form-check-input" type="radio" name="search" id="todos" value="todos" />
                <label className="form-check-label">
                    Todos
                </label> 
            </div>
            <div className='form-check mx-2'>
                <input className="form-check-input" type="radio" name="search" id="ingreso" value="ingreso"/>
                <label className="form-check-label">
                    Ingreso
                </label> 
            </div>
            <div className='form-check'>
                <input className="form-check-input" type="radio" name="search" id="gasto" value="gasto"/>
                <label className="form-check-label">
                    Gasto
                </label> 
            </div>
        </div>
        {props.movimientos.map((movimiento) => (
            <Movimiento
                key={movimiento.id}
                movimiento={movimiento}
                deleteMovimiento={deleteMovimiento}
                editRow={props.editRow}
            />
        ))}
    </div>
  )
}

export default ListaMovimientos