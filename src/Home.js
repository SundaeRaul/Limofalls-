import './Global.css';
import './Home.css';
import Header from './Components/Header/index';
import Background  from './Components/Background';

function Home() {
  return (
    <div className="container">
        <Header  />
        <Background />
    </div>
  );
}

export default Home;
