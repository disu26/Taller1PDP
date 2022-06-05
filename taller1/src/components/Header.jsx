import React from 'react'
import { FcMoneyTransfer } from "react-icons/fc";

const Header = ({logo, movimientos}) => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <span className='navbar-brand mx-2'>
            <img src = {logo} width = '30' height = '30' className='d-inline-block align-top' alt='logo'/>
            Taller 1 DASH-MARS
        </span>

        <div className='collapse navbar-collapse mx-2'>
          <span className='nav-item'>
            <div>
              <label className='text-white'>Saldo inicial: </label>
              <br />
              <div className='d-inline'>
                <FcMoneyTransfer />
                <p className='text-white d-inline mx-2'>10000000</p>
              </div>
            </div>
          </span>
        </div>
    </nav>
  )
}

export default Header