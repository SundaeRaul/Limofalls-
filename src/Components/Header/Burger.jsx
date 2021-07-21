import React, { useState } from 'react'
import { TiThMenu } from 'react-icons/ti';
import './index.css'

function Burger(){
    return(
        <button className="burger-button">
            <TiThMenu className="burgerMenu-icon" size={25} color="gray" />
        </button>
    );
}

export default Burger;