import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app-bg app-wrapper section-padding">
    <div className="app-wrapper-img app-wrapper-img-reverse">
      <img src={images.chef} />
    </div>

    <div className="app-wrapper-info">
      <SubHeading title="Chef word" />
      <h1 className="headtext-cormorant">What we believe in</h1>

      <div className="app-chef-content">
        <div className="app-chef-content-quote">
          <img src={images.quote} alt="quote" />
          <p className="p-opensans">
            
            Lorem ipsum sit tellus lobortis sed senectus vivamus molestie.{" "}
          </p>
         
        </div>
        <p className="p-opensans">
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum
            volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
            aliquam amet tellus
          </p>
          </div>
        <div className="app-chef-sign">
          <p>Kevin Luo</p>
          <p className="p-opensans">Chef & Founder</p>
          <img src={images.sign} alt="sign" />
        </div>
     
    </div>
  </div>
);

export default Chef;
