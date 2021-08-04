import './Global.css';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navbar/index';
import Footer from './Components/Footer/index';
import Fundo from './Imagens/fundoLimofalls.jpg';
import {FaFacebookSquare, FaWhatsappSquare} from 'react-icons/fa';
import {GrInstagram} from 'react-icons/gr'
import {useState} from 'react';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';

function Home() {

  function enviarEmail(e) {
    init("user_AMm96q6AFTmezGfpCaNiN");
    e.preventDefault();

    emailjs.sendForm('limofallsexperience', 'limofalls', e.target, 'user_xaXDnEpXFJC6u4kOBo1Eq')
      .then((result) => {
          alert('Mensagem enviada com Sucesso!');
      }, (error) => {
          alert(error.message);
      });
      e.target.reset()
  }

  let iconStyle = {margin:"10px", color: "black"}

  return (
    <div className="body-home container-fluid px-0 d-flex flex-column">
      <Navigation />

      {/* HEADER */}
      <div id="inicio" className="header-container container-fluid m-0 p-0">
        <div className="container-fluid p-0 m-0">
          <img src={Fundo} className="fundo-header img-fluid position-absolute" />
        </div>
        <div className="text-header container position-relative">
          <h1 className="h1-header">LIMOFALLS<span className="spans"> EXPERIENCE</span></h1>
          <h3 className="h3-header">UMA EXPERIÊNCIA INÉDITA NA TERRA DAS CATARATAS</h3>
        </div>
      </div>
      {/* FIM HEADER */}

      {/* SECTION */} 
      <div id="servicos" className="container-fluid section-body text-center">
        <h1>Nossos Serviços</h1>
        <p>Faça do seu translado um show à parte</p>
        <div className="container">
          <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://samslimousine.com/wp-content/uploads/2014/08/slider-image-8.jpg" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                  <h5>CASAMENTOS E ANIVERSARIOS</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="https://samslimousine.com/wp-content/uploads/2014/08/slider-image-8.jpg" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                  <h5>TRANSFERS</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="https://samslimousine.com/wp-content/uploads/2014/08/slider-image-8.jpg" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                  <h5>TOURS EM FOZ</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="https://samslimousine.com/wp-content/uploads/2014/08/slider-image-8.jpg" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                  <h5>FESTAS</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Anterior</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Proximo</span>
            </button>
          </div>
        </div>
      </div>
      {/* FIM SECTION */}

      {/* FORM */}
      <div id="contato" className="form-body container-fluid m-0 p-0 mt-5">
        <div className="container text-center position-relative">
          <p className="entre-em-contato text-white mt-3">Entre em contato</p>
          <form onSubmit={enviarEmail} className="d-flex flex-column align-items-center justify-content-around text-white">
            <input className="field-form col-lg-6 col-md-4" type="text" placeholder="Nome" name="nome" />
            <input className="field-form col-lg-6 col-md-4" type="email" placeholder="Email" name="email"  />
            <input className="field-form col-lg-6 col-md-4" type="tel" placeholder="Telefone" name="telefone" />
            <textarea className="field-form col-lg-6 col-md-4" type="text" placeholder="Sua Mensagem" name="mensagem" />
            <input type="submit" value="Enviar Mensagem" className="btn-form col-lg-5 col-md-3" />
          </form>
        </div>
      </div>
      {/* FIM FORM */} 

      {/* RODAPÉ */}
      <div className="container-fluid">
        <div className="container d-flex flex-column justify-content-around align-items-center text-center p-2">
          <h1 className="h1-header">LIMOFALLS<span className="spans"> EXPERIENCE</span></h1>
          <div class="container d-flex justify-content-center align-items-center mt-3">
            <a href="https://www.facebook.com/limofallsexperience">
              <FaFacebookSquare size={45} style={iconStyle} />
            </a>
            <a href="https://www.instagram.com/limofallsexperience/">
              <GrInstagram size={45} style={iconStyle} />
            </a>
            <a href="https://api.whatsapp.com/send?phone=5545991521353">
              <FaWhatsappSquare size={45} style={iconStyle} />
            </a>
          </div>
        </div>
      </div>
      {/* FIM RODAPÉ */}
      <Footer />                    
    </div>
  );
}

export default Home;
