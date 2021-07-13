import React from 'react';
import Logo from '../../Imagens/logo_Limofalls-tras.png';
import './index.css';
import '../../Global.css';
import { AiFillFacebook } from 'react-icons/ai';
import { GrInstagram } from 'react-icons/gr'
import { ImWhatsapp } from 'react-icons/im'


function Header() {
    let iconsStyle = {color: "gray", margin: "20px"};

    return (
        <div className="bodyHeader">
            <img src={Logo} alt="logo Limofalls" />
            <div className="menuIcons">
                <AiFillFacebook size={40} style={iconsStyle}  />
                <GrInstagram size={40} style={iconsStyle}  />
                <ImWhatsapp size={40} style={iconsStyle}  />
                <span className="emailNav">reservas@limofalls.com.br</span>
            </div>
        </div>
    );
}

export default Header;