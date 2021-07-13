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
                            <h3>Casamentos/Aniversários</h3>
                        </div>                   
                    </div>
                    <div className="cards">
                        <FaTaxi size={45} />
                        <div className="textCards">
                            <h3>Transfers</h3>
                        </div>
                    </div>
                    <div className="cards">
                        <GiSteeringWheel size={45} />
                        <div className="textCards">
                            <h3>Tours em Foz</h3>
                        </div>  
                    </div>
                    <div className="cards">
                        <BiDrink size={45} />
                        <div className="textCards">
                            <h3>Festas</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section;