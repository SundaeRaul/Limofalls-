import React from 'react';
import './index.css';
import { AiFillFacebook } from 'react-icons/ai';
import { GrInstagram } from 'react-icons/gr'
import { ImWhatsapp } from 'react-icons/im'
import './mediaQuerys.css';

function DesktopNav(){
    
    let iconsStyle = {color: "gray", margin: "10px"};

    return(
        <div className="icons-header">
            <AiFillFacebook className="icons" size={25} style={iconsStyle}  />
            <GrInstagram className="icons" size={25} style={iconsStyle}  />
            <ImWhatsapp className="icons" size={25} style={iconsStyle}  />
            <span className="header-email">reservas@limofalls.com.br</span>
        </div>
    );
}

export default DesktopNav;