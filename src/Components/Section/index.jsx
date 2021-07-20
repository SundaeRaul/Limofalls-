import './index.css'
import Image from '../../Imagens/limofallsSection.jpg'
import {GiDiamondRing} from 'react-icons/gi'
import {FaTaxi} from 'react-icons/fa'
import {FaShuttleVan} from 'react-icons/fa'
import {FaGlassCheers} from 'react-icons/fa'


function Section () {

    let iconsStyle = {color: "black", margin:"15px"};

    return(
        <div className="sectionBody">
            <div className="textsection">
                <h1 className="titleSection">Nossos <span className="servicos">Serviços</span></h1>
                <h5>Faça do seu translado um show a parte</h5>
            </div>

            <section className="grid-section">
                <img src={Image} alt="Garotas numa limusine" />
                <div className="grid-items">
                    <div className="grid-box">
                        <GiDiamondRing size={85} style={iconsStyle} />
                        <div className="text-boxes">
                            <h2>CASAMENTOS/<br/>ANIVERSÁRIOS</h2>
                            <p>Alugue uma exclusiva limousine para o seu casamento ou aniversário.</p>
                        </div>
                    </div>
                    <div className="grid-box">
                        <FaGlassCheers size={80} style={iconsStyle} />
                        <div className="text-boxes">
                            <h2>FESTAS</h2>
                            <p>Uma noite para celebrar com seus amigos ou familiares</p>
                        </div>
                    </div>
                    <div className="grid-box">
                        <FaTaxi size={80} style={iconsStyle} />
                        <div className="text-boxes">
                            <h2>TRANSFERS</h2>
                            <p>Está chegando em Foz do Iguaçu e quer uma recepção de estrelas?</p>
                        </div>
                    </div>
                    <div className="grid-box">
                        <FaShuttleVan size={80} style={iconsStyle} />
                        <div className="text-boxes">
                            <h2>TOURS EM FOZ</h2>
                            <p>Passeie pela cidade com seus amigos e familiares.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Section