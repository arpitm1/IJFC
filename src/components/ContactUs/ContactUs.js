import Header from "../Header/header";
import Footer from "../Footer/footer";
import contact_banner from "../../img/contact-banner.png";
import leaf from "../../img/leaf.png";
import React from "react";
import "./ContactUs.css";
import image35 from "../../img/image 35.png";
import image36 from "../../img/image 36.png";
import image37 from "../../img/image 37.png";

import { Typography, Button, TextField } from "@mui/material";

function Gallery() {
  return (
    <div>
      <Header />
      {/* Top Banner */}
      <div className="banner">
        <img src={contact_banner} alt="banner" />
      </div>
      <div className="about-approach">
        <Typography variant="h1">Get In Touch</Typography>
      </div>
      <div className="">
        <img src={leaf} alt="leaf" className="contact-leaf"></img>
      </div>
      {/* Grid boxes */}
      <div className="wrapper">
        <div className="row">
          <img src={image35} alt=""></img>
          <br></br>
          <a
            href="+3219996545"
            style={{ "textDecoration": "none", color: "black" }}
          >
            +321 999 6545
          </a>
          <br></br>
          <a
            href="+3217658765"
            style={{ "textDecoration": "none", color: "black" }}
          >
            +321 765 8765
          </a>
        </div>
        <div className="row">
          <img src={image36} alt=""></img>
          <br></br>
          ijfc@gmail.com
        </div>
        <div className="row">
          <img src={image37} alt=""></img>
          <br></br>
          ijfc location
        </div>
      </div>

      {/* Form */}
      <div className="contactus-form">
        <Typography variant="h3" style={{ margin: "10px" }}>
          Contact Us
        </Typography>
        <div
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField fullWidth id="name" label="Name" variant="outlined" />
          <br></br>
          <TextField fullWidth id="email" label="Email" variant="outlined" />
          <br></br>
          <TextField
            fullWidth
            id="subject"
            label="Subject"
            variant="outlined"
          />
          <br></br>
          <TextField
            fullWidth
            multiline
            rows={4}
            id="comments"
            label="Comments"
          />
          <br></br>
          <Button
            variant="contained"
            style={{
              margin: "10px",
              "backgroundcolor": "#E78B49",
              width: "20%",
            }}
          >
            Send
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Gallery;
