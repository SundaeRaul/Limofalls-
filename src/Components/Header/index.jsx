import './index.css'
import React from 'react'
import Fundo from '../../Imagens/fundoLimofalls.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

function Header () {
    return(
        <div className="container-fluid m-0 p-0 position-absolute">
            <img src={Fundo} className="img-fluid" />
            <div className="text-white d-flex flex-column justify-content-around align-items-end position-relative">
                <h1 className="fw-bold mb-5">LIMOFALLS <span className="text-warning">EXPERIENCE</span></h1>
                <h3 className="fw-bold fs-1">UMA EXPERIÊNCIA EXCLUSIVA NA TERRA DAS CATARATAS</h3>
            </div>
        </div>
    );
}

export default Header;