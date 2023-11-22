import React, { useState } from "react";
import logo from "../src/assets/logo.png";
import background from "../src/assets/safety.png";

import {
  FaLinkedin,
  FaInstagramSquare,
  FaEnvelope,
  FaFacebookSquare,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import "./App.css";
import { DownloadOutlined } from "@ant-design/icons";
import { Button, Divider, Flex, Radio } from "antd";

function App() {
  const [size, setSize] = useState("large");
  const onButtonClick = () => {
    const pdfUrl = "Saharitradingco.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="App">
      <div className="home">
        <div className="background">
          <img src={background} className="back-img" alt="logo" />
        </div>

        <div className="nav">
          <div className="navbar">
            <div className="company">
              <div className="img">
                <img src={logo} className="nav-img" alt="logo" />
              </div>
              <div className="name">SAHARI</div>
            </div>
            <div className="moto">
              Empowering Industries Delivering Excellence
            </div>
          </div>

          <Button
            type="primary"
            icon={<DownloadOutlined />}
            size={size}
            onClick={onButtonClick}
          >
            Brochure
          </Button>
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
              <h4 className="contact">+966 55 085 5114</h4>
            </div>
          </div>
          <div className="address">
            <div className="locationdot">
            <FaLocationDot size={25}/>
            </div>
          
            <div className="street">
            <h4 className="start">
              Abu Bakr Al Siddiq St. Ash Sharafiyyah Dist.
            </h4>
            <h4 className="start"> Jeddah - Kingdom Of Saudi Arabia</h4>

            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
