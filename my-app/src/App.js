import logo from './logo.svg';
import './App.css';
import LandingPage from './components/HomePage/LandingPage';
import Logo from './components/Logos/Logo';
import SlidingImages from './components/Logos/SlidingImages';
import SlidingImages2 from './components/Logos/SlidingImages2';
import blackLogo from './assets/black_logo_bni.png';
import ContactPage from './components/ContactUs/ContactPage';
import horizontalLogo from './assets/Horizontal-Logo-White.png';
import ImageList from './components/ImageList/ImageList';
import ImageList2 from './components/ImageListStyle2/ImageList2';
import ContactPage2 from './components/ContactUs2/ContactPage2';




function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="overlay1">

          <div className="logodiv">
             
              <img src={horizontalLogo} alt="BrednIsla logo" className='bredlogo'/>
            </div>

          <div className="topline">
            <Logo />
          </div>

          <div className="middleline">

          </div>

          <div className="bottomline">
          <LandingPage />
          </div>
          
            
            
          
          
          
          </div>
      </div>



      <div className="slidingim">
       <ImageList2 />
        




      </div>

      <div className="contactus">
        <ContactPage2 />
        
      </div>
      
    </div>
  );
}

export default App;
