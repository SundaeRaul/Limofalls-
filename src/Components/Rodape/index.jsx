import React from 'react';
import './index.css';
import {ImFacebook2} from 'react-icons/im'
import {GrInstagram} from 'react-icons/gr'
import {ImWhatsapp} from 'react-icons/im'

function Rodape(){

    let iconStyle = {color:"black"}

    return(
        <div className="container d-flex align-items-center justify-content-around flex-column text-center">
            <h1 className="rodape-text col-lg-8 fw-bold align-self-center mt-5">LIMOFALLS <span className="text-yellow">EXPERIENCE</span></h1>
            <div className="col-lg-8 d-flex justify-content-center align-items-center mb-5">
                <a href="#" className="p-4">
                    <ImFacebook2 size={45} style={iconStyle} />
                </a>
                <a href="#" className="p-4">
                    <GrInstagram size={45} style={iconStyle} />
                </a>
                <a href="#" className="p-4">
                    <ImWhatsapp size={45} style={iconStyle} />
                </a>
            </div>
         </div>
    )
}

export default Rodape;