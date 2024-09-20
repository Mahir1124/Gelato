import logo from './data/gelato_logo_black.svg'
import HeroSection from './components/HeroSection';
import cart from './data/cart.svg'
import contact from './data/contact.svg'
import INR from './data/INR.svg'
import sign_in from './data/sign-in.svg'
import Second_hero from './components/Second_hero';
import Wcg from './components/Wcg';
import Third_hero from './components/Third_hero';
import Fourth_hero from './components/Fourth_hero';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <HeroSection />
        <Second_hero />
        <Wcg />
        <Third_hero />
        <Fourth_hero />
      </main>
      <Footer />
      
    </div>
  );
}

export default App;
