import React from "react";

import "./AboutUs.css";
import { images } from "../../constants";

const AboutUs = () => (
  <div className="app-aboutus app-bg flex-center section-padding" id="about">
    <div className="app-aboutus-overlay flex-center">
      <img src={images.G} alt="G letter" />
    </div>

    <div className="app-aboutus-content flex-center">
      <div className="app-aboutus-content-about">
        <h1 className="headtext-cormorant">About us</h1>
        <img src={images.spoon} alt="spoon" className="spoon-img" />
        <p className="p-opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend
          ipsum nec ligula consectetur tristique. Vestibulum ante ipsum primis
          in faucibus orci luctus et ultrices posuere cubilia Curae; Cras at
          lectus massa. Integer convallis mauris id tortor efficitur, et
          volutpat eros accumsan. Sed vitae consequat nulla.
        </p>
        <button type="button" className="custom-button">Learn more</button>
      </div>



      <div className="app-aboutus-content-knife flex-center">
        <img src={images.knife} alt="about-knife" />
      </div>

      <div className="app-aboutus-content-history">
        <h1 className="headtext-cormorant">Our History</h1>
        <img src={images.spoon} alt="spoon" className="spoon-img" />
        <p className="p-opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend
          ipsum nec ligula consectetur tristique. Vestibulum ante ipsum primis
          in faucibus orci luctus et ultrices posuere cubilia Curae; Cras at
          lectus massa. Integer convallis mauris id tortor efficitur, et
          volutpat eros accumsan. Sed vitae consequat nulla.
        </p>
        <button type="button" className="custom-button">Learn more</button>
      </div>


    </div>
  </div>
);

export default AboutUs;
