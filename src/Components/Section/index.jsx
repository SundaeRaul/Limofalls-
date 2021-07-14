import React from 'react';
import '../../Global.css';
import './index.css';
import Girls from '../../Imagens/limofallsSection.jpg';
import { GiDiamondRing } from 'react-icons/gi';
import { FaTaxi } from 'react-icons/fa';
import { GiSteeringWheel } from 'react-icons/gi';
import { BiDrink } from 'react-icons/bi';



function Section(){
    return (
        <div className="sectionBody">
            <div className="titlesSection">
                <h3 className="h3Section">Nossos <span className="spanSection">Serviços</span></h3>
                <span className="pSection">Faça do seu translado um show a parte</span>    
            </div>
            <div className="imgAndCards">
                <img src={Girls} alt="Meninas numa Limusine" className="imgSection"/>
                <div className="divCards">
                    <div className="cards">
                        <GiDiamondRing size={45} />
                         <div className="textCards">
                            <h3>Casamentos/<br></br>Aniversários</h3>
                            <p>Alugue uma exclusiva limousine para o seu casamento ou aniversário</p>
                        </div>                   
                    </div>
                    <div className="cards">
                        <FaTaxi size={45} />
                        <div className="textCards">
                            <h3>Transfers</h3>
                            <p>Está chegando em Foz do Iguaçu e quer uma recepção de estrelas?</p>
                        </div>
                    </div>
                    <div className="cards">
                        <GiSteeringWheel size={45} />
                        <div className="textCards">
                            <h3>Tours em Foz</h3>
                            <p>Passeie pela cidade com seus amigos ou familiares</p>
                        </div>  
                    </div>
                    <div className="cards">
                        <BiDrink size={45} />
                        <div className="textCards">
                            <h3>Festas</h3>
                            <p>Uma noite para celebrar com amigos ou familiares</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section;