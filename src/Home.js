import './Global.css';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navbar/index';
import Footer from './Components/Footer/index';
import Fundo from './Imagens/fundoLimofalls.jpg'

function Home() {
  return (
    <div className="body-home container-fluid px-0 d-flex flex-column">
      <Navigation />
      // HEADER
      <div className="header-container container-fluid m-0 p-0">
        <div className="container-fluid p-0 m-0">
          <img src={Fundo} className="fundo-header img-fluid position-absolute" />
        </div>
        <div className="text-header container position-relative">
          <h1 className="h1-header">LIMOFALLS<span className="span-header">EXPERIENCE</span></h1>
          <h3 className="h3-header">UMA EXPERIÊNCIA INÉDITA NA TERRA DAS CATARATAS</h3>
        </div>
      </div>
      <Footer />                    
    </div>
  );
}

export default Home;
