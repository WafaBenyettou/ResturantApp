import React from "react";

import "./AboutUs.css";
import { images } from "../../constants";

const AboutUs = () => (
  <div className="app-aboutus app-bg flex-center section-padding" id="about">
    <div className="app-aboutus-overlay flex-center">
      <img src={images.G} alt="G-overlay" />
    </div>
  </div>
);

export default AboutUs;
