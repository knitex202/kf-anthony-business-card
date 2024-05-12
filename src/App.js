
import './App.css';
import bidenHarris from "../src/Assets/bidenHarrisLogo.png"
import qrcode from "../src/Assets/icons8-qr-code-96.png"
import kfProfile from "../src/Assets/kf-profile.png"
import kflogo from "../src/Assets/kf-logo.png"
import Landing from './Components/Landing/Landing';
import { useState } from 'react';
import QRcode from './Components/QRcode/QRcode';


function App() {
  const [selected,setSelected] = useState(false)
  const handleClick = () => {
    setSelected(!selected)
  }
  return (
    <div className="App">  
       <div className="card-container">
        <div className="upper-container">
          <div className="logo-container">
          <img src={kflogo} height={65} alt="" />
          </div>
          <img onClick={handleClick} className="qr-button" src={qrcode} height={40} alt="" />
        </div>
        <div className="content-container">
          <div className="profile-container"> 
            <img src={kfProfile}  alt="" />
          </div>
          <div className="profile-info-container">
          {selected === true ? <QRcode/> :<Landing/>}
          </div>
        </div>
       </div>
    </div>
  );
}

export default App;
