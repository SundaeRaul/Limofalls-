import './index.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Logo from '../../Imagens/logo_Limofalls-tras.png'
import {AiFillFacebook} from 'react-icons/ai'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaWhatsappSquare} from 'react-icons/fa'



function Navigation() {

  let iconStyle= {margin:"10px", color:"gray"}

  return(
    <nav className="navbar navbar-expand-md navbar-light bg-dark">
      <div className="container">
        <a href="">
          <img src={Logo} height="80px" width="90px" alt="Logo Limofalls"/>
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle Navigation">
          <span className="navbar-toggler-icon text-white"></span>
        </button>

        <div id="navigation" className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link">
                <AiFillFacebook style={iconStyle} size={30} />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <AiFillFacebook style={iconStyle} size={30} />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <AiFillFacebook style={iconStyle} size={30} />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <span className="text-muted d-flex align-items-center">reservas@limofalls.com.br</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;