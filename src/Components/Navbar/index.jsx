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
    <nav className="container-fluid navbar navbar-expand-md navbar-dark bg-dark d-flex justify-content-around fixed-top">
      <img src={Logo} alt="Logo Limofalls" width="90px" height="80px"/>
      
        <div className="navbar-collapse collapse show" id="navbarToggler"> 
          <a className="nav-item nav-link" href="#">
            <AiFillFacebook size={30} style={iconStyle} />
          </a>
          <a className="nav-item nav-link" href="#">
            <FaInstagramSquare size={30} style={iconStyle} />
          </a>
          <a className="nav-item nav-link" href="#">
            <FaWhatsappSquare size={30} style={iconStyle} />
          </a>
          <a className="nav-item nav-link">
            <span>reservas@limofalls.com.br</span>
          </a>
        </div>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="true" aria-label="Toggle Navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </nav>
  )
}

export default Navigation;