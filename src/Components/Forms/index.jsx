import React from 'react'
import './index.css'
import Background from '../../Imagens/contact-bg.jpg'

function Forms() {
    return(
        <section className="contact container-fluid m-0 p-0 text-white">
            <div className="container d-flex flex-column justify-content-around align-items-center position-relative">
                <h1 className="contact-h1 fw-bold fs-2">Entre em contato</h1>
                <form className="d-flex flex-column justify-content-around align-items-center">
                    <input className="inputForm p-2 m-3 w-5" type="text" placeholder="Nome:" />
                    <input className="inputForm p-2 m-3 w-5" type="text" placeholder="Email:" />
                    <input className="inputForm p-2 m-3 w-5" type="tel" placeholder="Telefone:" />
                    <textarea className="inputForm p-3 m-3 w-5" placeholder="Sua Mensagem" />
                    <button type="button" class="btn p-3 m-5" data-bs-toggle="button" autocomplete="off">Enviar Mensagem</button>
                </form>
                <div className="d-flex flex-column justify-content-around align-items-center fs-4 fw-bold">
                    <p>Contato</p>
                    <p>(45) 99152-1353</p>
                </div>
            </div>
        </section>
    )
}

export default Forms;