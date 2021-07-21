import './index.css'
import Logo from '../../Imagens/logo_Limofalls-tras.png';
import { AiFillFacebook } from 'react-icons/ai';
import { GrInstagram } from 'react-icons/gr'
import { ImWhatsapp } from 'react-icons/im'

function Header() {

    let iconsStyle = {color: "gray", margin: "10px"};
    
    return(
        <div className="bodyHeader">
            <img className="logo" src={Logo} alt="Logo Limofalls" />
            <div className="icons-header">
                <AiFillFacebook className="icons" size={25} style={iconsStyle}  />
                <GrInstagram className="icons" size={25} style={iconsStyle}  />
                <ImWhatsapp className="icons" size={25} style={iconsStyle}  />
                <span className="header-email">reservas@limofalls.com.br</span>
            </div>
        </div>
    )
}

export default Header;