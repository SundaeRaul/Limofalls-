import './index.css'
import Girls from '../../Imagens/limofallsSection.jpg'
import {GiDiamondRing} from 'react-icons/gi'
import {MdLocalTaxi} from 'react-icons/md'
import {FaShuttleVan} from 'react-icons/fa'
import {FaGlassCheers} from 'react-icons/fa'



function Section() {

    let iconStyle= {margin:"10px", color:"black"}

    return(
        <div className="sectionBody container-fluid py-5 bg-f3 d-flex justify-content-around align-items-center flex-column">
            <h1 className="fw-bold">Nossos <span className="text-yellow">Serviços</span></h1>
            <h3>Faça do seu Transporte um show à parte</h3>
            <div className="container d-flex justify-content-between align-items-center mt-3 flex-row">
                <img className="girls-img" src={Girls} alt="Garotas na Limusine" />
                <div className="icons d-flex flex-wrap">
                    <div className="icon-item col-lg-6 row-lg-6 d-flex flex-wrap justity-content-between align-tems-center">
                        <GiDiamondRing className="mt-3" style={iconStyle} size={40} />
                        <div className="text-icons-item d-flex flex-column justify-content-around flex-wrap">
                            <h2>CASAMENTOS/<br></br>ANIVERSÁRIOS</h2>
                            <p>Alugue uma exclusiva limousine para o seu casamento ou aniversário.</p>
                        </div>
                    </div>
                    <div className="icon-item col-lg-6 d-flex flex-wrap justity-content-between align-tems-center">
                        <FaGlassCheers className="mt-3" style={iconStyle} size={40} />
                        <div className="text-icons-item d-flex flex-column justify-content-around flex-wrap">
                            <h2>FESTAS</h2>
                            <p>Uma noite para celebrar com seus amigos ou familiares.</p>
                        </div>
                    </div>
                    <div className="icon-item col-lg-6 d-flex flex-wrap justity-content-center align-tems-center">
                        <MdLocalTaxi className="mt-3" style={iconStyle} size={40} />
                        <div className="text-icons-item d-flex flex-column justify-content-around flex-wrap">
                            <h2>TRANSFERS</h2>
                            <p>Está chegando em Foz do Iguaçu e quer uma recepção de estrelas?</p>
                        </div>
                    </div>
                    <div className="icon-item col-lg-6 d-flex flex-wrap justity-content-between align-tems-center">
                        <FaShuttleVan className="mt-3" style={iconStyle} size={40} />
                        <div className="text-icons-item d-flex flex-column justify-content-evenly flex-wrap">
                            <h2 className="mb-4">TOURS EM FOZ</h2>
                            <p>Passeie pela cidade com seus amigos e familiares.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Section;