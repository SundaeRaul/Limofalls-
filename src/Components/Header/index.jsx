import './index.css'
import Logo from '../../Imagens/logo_Limofalls-tras.png'
import RightNav from './RightNav'
import Burger from './Burger'
import './DesktopNav';
import { TiThMenu } from 'react-icons/ti'
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { useState } from 'react'
import DesktopNav from './DesktopNav';

function Header() {

    const [burger, setBurger] = useState(false)

    const hamburgerIcon = <button className="burger-button" onClick={() => setBurger(!burger)}>
                            <TiThMenu className="burgerMenu-icon" size={25} color="gray" />
                          </button>

    const closeIcon = <button className="burger-button" onClick={() => setBurger(!burger)}>
                        <IoMdCloseCircleOutline className="burgerMenu-icon" size={25} color="gray" />
                      </button>

    return(
        <div className="bodyHeader">
            <img className="logo" src={Logo} alt="Logo Limofalls" />
            <DesktopNav />
            {burger ? closeIcon : hamburgerIcon}
            {burger && <RightNav />}
        </div>
    )
}

export default Header;