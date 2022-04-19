import './Home.css'
import NavBar from '../Navigation/NavBar';
import bgImage from './Home.png'


const Home = () => {

    return (
      <>
        <NavBar />
        <section className="hero-section">
          <img className='bg-image' src={bgImage} />
        </section>
      </>
    );
  };

export default Home;  