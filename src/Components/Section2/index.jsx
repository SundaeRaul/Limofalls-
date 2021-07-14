import React from 'react';
import './index.css';
import { AiFillFacebook } from 'react-icons/ai';
import { GrInstagram } from 'react-icons/gr';
import { ImWhatsapp } from 'react-icons/im';

function Section2 (){
    let iconsStyle = {color: "Black", margin: "20px"};

    return(
        <div className="section2Body">
            <h2 className="h2section2">LIMOFALLS <span className="spanSec2">EXPERIENCE</span></h2>
            <div className="sectionIcons">
                <AiFillFacebook size={30} style={iconsStyle}  />
                <GrInstagram size={30} style={iconsStyle}  />
                <ImWhatsapp size={30} style={iconsStyle}  />
            </div>
        </div>
    )
}

export default Section2;