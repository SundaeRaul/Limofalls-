import './index.css'

function Form() {
    return(
        <div className="formBody">
            <h1>Entre em contato</h1>
            <form className="formulario">
                <input type="text" placeholder="Nome" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Telefone" />
                <input type="text" placeholder="Mensagem" />
            </form>
            <button type="submit">Enviar</button>
            <span>Contato<br/>(45) 99152-1353</span>
        </div>
    )
}

export default Form