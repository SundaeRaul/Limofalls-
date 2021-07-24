import './Global.css';
import './Home.css';
import Navigation from './Components/Navbar/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/index';

function Home() {
  return (
    <div className="container-fluid px-0">
      <Navigation />
      <Header />
    </div>
  );
}

export default Home;
