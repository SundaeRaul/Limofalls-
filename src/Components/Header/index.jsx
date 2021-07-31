import './index.css'
import React from 'react'
import Fundo from '../../Imagens/fundoLimofalls.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

function Header () {
    return(
        <div className="container-fluid header-body m-0 p-0">
            <div className="container-fluid p-0">
                <img src={Fundo} className="img-fluid"/>
                <div className="container d-flex align-items-end text-end">
                    <h1 className="h1-header position-relative">LIMOFALLS<span className="experience">EXPEREINCE</span></h1>
                </div>
            </div>
            
        </div>
    );
}

export default Header;