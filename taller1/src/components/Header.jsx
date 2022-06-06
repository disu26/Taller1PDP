import React from 'react'
import { FcMoneyTransfer } from "react-icons/fc";

const Header = ({ movimientos, saldoInicial, saldoFinal }) => {

  const formateado = saldoFinal.toLocaleString("en");
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <span className='navbar-brand mx-2'>
            <img src = 'https://d3q0kt5yih1b7n.cloudfront.net/organizations/covers/politecnico-jaime-isaza-cadavid_4716001832.jpg' width = '30' height = '30' className='d-inline-block align-top' alt='logo'/>
            Taller 1 DASH-MARS
        </span>

        <div className='collapse navbar-collapse mx-2'>
          <span className='nav-item'>
            <div>
              <label className='text-white'>Saldo inicial: </label>
              <div className='d-inline mx-2'>
                <FcMoneyTransfer />
                <p className='text-white d-inline mx-2'>{saldoInicial}</p>
              </div>

              <label className='text-white'>Saldo Final: </label>
              <div className='d-inline mx-2'>
                <FcMoneyTransfer />
                
                <p className='text-white d-inline mx-2'>{formateado}</p>
              </div>
            </div>
          </span>
        </div>
    </nav>
  )
}

export default Header