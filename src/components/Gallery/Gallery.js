import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import React from "react";
import Gallery_banner from "../../img/gallery_banner.png";
import Gallery1 from "../../img/gallery1.png";
import Gallery2 from "../../img/gallery2.png";
import Gallery3 from "../../img/gallery3.png";
import Gallery4 from "../../img/gallery4.png";

import "./Gallery.css";

function Gallery() {
  return (
    <div>
      <Header />
      {/* Banner */}
      <div className="banner">
        <img src={Gallery_banner} alt="banner" />
        <p className="gallery-banner-main">JOIN US WITH OUR BEST MOMENTS</p>
        <p className="gallery-banner-sub">Gallery</p>
      </div>
      <div className="about">
        <p className="gallery-heading">
          We have gathered many beautiful moments during our journey. The
          gallery that you must see in your lifetime
        </p>
      </div>
      {/* Gallery images */}
      <div className="cover">
        <div className="cover-image">
        <img src={Gallery1} alt="gallery"></img>
        </div>
        <div className="cover-image">

        <img src={Gallery2} alt="gallery2"></img>
        </div>
        <div className="cover-image">

        <img src={Gallery3} alt="gallery3"></img>
        </div>
        <div className="cover-image">

        <img src={Gallery4} alt="gallery4"></img>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default Gallery;
