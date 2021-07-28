import React from 'react'
import './index.css'
import Background from '../../Imagens/contact-bg.jpg'

function Forms() {
    return(
        <section className="contact container-fluid m-0 p-0 text-white">
            <div className="container d-flex flex-column justify-content-around align-items-center">
                <h1 className="mt-5 fw-bold">Entre em contato</h1>
                <form className="col-lg-8 col-md-6 d-flex jusify-content-around align-items-center flex-column mt-5">
                    <label className="p-3 fs-4">Nome Completo</label>
                    <input className="input-contact p-3 col-lg-12" type="text" placeholder="Seu nome" />

                    <label className="p-3 fs-4">Email</label>
                    <input className="input-contact p-3 col-lg-12" type="text" placeholder="exemplo@hmail.com"/>

                    <label className="p-3 fs-4">Telefone</label>
                    <input className="input-contact p-3 col-lg-12" type="tel" placeholder="(45) 99999-9999" />

                    <label className="p-3 fs-4">Sua Mensagem</label>
                    <textarea className="input-contact p-3 col-lg-12" placeholder="Mensagem" />
                </form>

                <button className="contact-btn btn col-4 mt-5 mb-3">Enviar Mensagem</button>
            </div>
        </section>
    )
}

export default Forms;