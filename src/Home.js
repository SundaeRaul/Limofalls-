import './Global.css';
import './Home.css';
import Navigation from './Components/Navbar/index';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className="container-fluid px-0">
      <Navigation />
    </div>
  );
}

export default Home;
