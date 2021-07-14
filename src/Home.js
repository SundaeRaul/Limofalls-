import './Global.css';
import Header from './Components/Header/index';
import Section from './Components/Section/index';
import Forms from './Components/Form/index';
import './Home.css';

function Home() {
  return (
    <>
      <div className="container">
        <div className="bodyHome">
          <Header/>
          <div className="textCenter">
            <h2 className="titleHome">LIMOFALLS <span className="spanHome">EXPERIENCE</span></h2>
            <h3 className="titleHome">UMA EXPERIÊNCIA EXCLUSIVA NA TERRA DAS CATARATAS</h3>
          </div>
        </div>
      </div>
      <Section />
      <Forms />
    </>
  );
}

export default Home;
