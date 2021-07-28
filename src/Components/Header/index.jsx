import './index.css'
import React from 'react'
import Fundo from '../../Imagens/fundoLimofalls.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

function Header () {
    return(
        <div className="container-fluid m-0 p-0">
            <img src={Fundo} className="img-fluid" />
            <div className="text-white d-flex position-relative">
                <h1 className="header-text fw-bold">LIMOFALLS <span className="text-yellow">EXPERIENCE</span></h1>
                <h3 className="header-text fw-bold">UMA EXPERIÊNCIA EXCLUSIVA NA TERRA DAS CATARATAS</h3>
            </div>
        </div>
    );
}

export default Header;