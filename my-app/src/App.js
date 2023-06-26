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




function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="overlay1">

          <div className="logodiv">
             
              <img src={horizontalLogo} alt="BrednIsla logo" style={{ width: '150px', height: 'auto' }}/>
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
       <ImageList />
        




      </div>

      <div className="contactus">
        <ContactPage />
        
      </div>
      
    </div>
  );
}

export default App;
