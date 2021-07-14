import React from 'react';
import '../../Global.css';
import './index.css';

function Forms() {
    return (
        <div className="formBody">
            <h3 className="h3Form">Entre em contato</h3>
            <form className="forms">
                <input className="inputForm" type="text" name="Nome" placeholder="Digite seu nome" />
                <input className="inputForm" type="text" name="Email"  placeholder="Digite se Email" />
                <input className="inputForm" type="number" name="Telefone" placeholder="Digite seu telefone" />
                <input className="inputFormText" type="text" name="Nome" placeholder="Digite sua mensagem" />
            </form>
            <button className="enviarMensagem">Enviar Mensagem</button>
            <h4 className="h3contato">Contato</h4>
            <h4 className="h3contato">(45) 99152-1353</h4>
        </div>
    )
}

export default Forms;