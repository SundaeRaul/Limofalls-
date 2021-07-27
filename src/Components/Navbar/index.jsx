import './index.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Logo from '../../Imagens/logo_Limofalls-tras.png'
import {AiFillFacebook} from 'react-icons/ai'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaWhatsappSquare} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'



function Navigation() {

  let iconStyle= {margin:"10px", color:"gray"}

  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container flex-row align-items-center">
        <a className="navbar-brand wow slide-in-left animated" href="#" data-wow-duration="1s" visibility="visible"  animation-duration="1s">
          <img src={Logo} height="95px" width="110px" alt="Logo Limofalls"/>
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle Navigation">
          <GiHamburgerMenu style={iconStyle} size={40} />
        </button>

        <div id="navigation" className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link">
                <p className="text-color mb-0">Inicio</p>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <p className="text-color mb-0">Serviços</p>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <p className="text-color mb-0">Contato</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;