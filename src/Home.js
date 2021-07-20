import './Global.css';
import './Home.css';
import Header from './Components/Header/index';
import Background  from './Components/Background';
import Section from './Components/Section/index';
import Form from './Components/Form/index';

function Home() {
  return (
    <div className="container">
        <Header  />
        <Background />
        <Section />
        <Form />
    </div>
  );
}

export default Home;
