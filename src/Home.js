import './Global.css';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navbar/index';
import Header from './Components/Header/index';
import Section from './Components/Section/index';
import Forms from './Components/Forms/index';

function Home() {
  return (
    <div className="container-fluid px-0 d-flex flex-column">
      <Navigation />
      <Header />
      <Section />
      <Forms />
    </div>
  );
}

export default Home;
