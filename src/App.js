import logo from "../src/assets/logo.png";
import background from "../src/assets/safety.png";

import {
  FaLinkedin,
  FaInstagramSquare,
  FaEnvelope,
  FaFacebookSquare,
} from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div
        className="home"
        // style={{
        //         background: `url(${background})`,backgroundRepeat:"no-repeat",backgroundposition: "60%"
        //       }}
      >
        <div className="background">
        <img src={background} className="back-img" alt="logo" />

        </div>

        <div className="nav">
          <div className="img">
            <img src={logo} className="nav-img" alt="logo" />
          </div>
          <div className="name">SAHARI</div>
        </div>

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>COMING SOON....!</p>
          <p>Sahari Trading Co.</p>
        </div>
        <div className="bottom">
          <div className="icon">
            <div className="temp">
              <div className="social">
                <FaLinkedin size={25} />
                <FaInstagramSquare size={25} />
                <FaEnvelope size={25} />
                <FaFacebookSquare size={25} />
              </div>
            </div>

            <div>
              <h4>+966 55 085 5114</h4>
            </div>
          </div>
          <div className="address">
            <h4>
              Abu Bakr Al Siddiq St. Ash Sharafiyyah Dist.<br></br>
              Jeddah - Kingdom Of Saudi Arabia
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;



