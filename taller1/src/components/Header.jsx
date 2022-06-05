import React from 'react'

const Header = ({logo}) => {

  return (
    <nav className="navbar navbar-light bg-light">
        <span className='navbar-brand'>
            <img src = {logo} width = '30' height = '30' className='d-inline-block align-top' alt='logo'/>
            Taller 1 DASH-MARS
        </span>
    </nav>
  )
}

export default Header