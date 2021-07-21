import './index.css';
import { AiFillFacebook } from 'react-icons/ai';
import { GrInstagram } from 'react-icons/gr'
import { ImWhatsapp } from 'react-icons/im'

function Rodape() {

    let iconsStyle = {color: "black", margin: "10px"};

    return(
        <div className="rodapeBody">
             <h1 className="h1Rodape">LIMOFALLS <span className="experience">EXPERIENCE</span></h1>
             <div className="icons-rodape">
                <AiFillFacebook size={35} style={iconsStyle}  />
                <GrInstagram size={35} style={iconsStyle}  />
                <ImWhatsapp size={35} style={iconsStyle}  />
            </div>
        </div>
    );
} 

export default Rodape;