import Header from "../Header/header";
import Footer from "../Footer/footer";
import React from "react";
import imageget from "../../img/getintouch.png";
import imageleaf from "../../img/image34.png";
import imagecall from "../../img/image35.png";
import imagemail from "../../img/image36.png";
import imageloc from "../../img/image37.png";
import {
    Typography,
  } from "@mui/material";
  import "./Contact.css";

  function Contact(){
    return(
        <div className="getintouch">
            <Header/>
            <div classsName="getintouch-banner">
                <img src={imageget} alt="getintouch-bannner" />
            </div>
            <div className="getintouch-text">
        <Typography variant="h1">Get In Touch</Typography>
        <img src={imageleaf} alt="getintouch-leaf" />
        </div>
        <Footer/>
        </div>
    );
  }

  export default Contact;