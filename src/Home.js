import './Global.css';
import './Home.css';
import Navigation from './Components/Navbar/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/index';
import Section from './Components/Section/index'

function Home() {
  return (
    <div className="container-fluid px-0 d-flex flex-column">
      <Navigation />
      <Header />
      <Section />
    </div>
  );
}

export default Home;
