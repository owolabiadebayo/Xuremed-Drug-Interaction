import './App.css';
import Aboutus from './component/Aboutus';
import Banner from './component/Banner';
import Footer from './component/Footer';
import Healthresources from './component/Health-resources';
import Navbar from './component/Navbar';
import Reviews from './component/Reviews';
import Subscribe from './component/Subscribe';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner></Banner>
      <Aboutus></Aboutus>
      <Healthresources/>
      <Reviews/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;
