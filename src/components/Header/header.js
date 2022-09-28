import React, { useState } from "react";
import {Stack, Box, Typography, Button} from "@mui/material"
// import { Link } from "react-router-dom";
import './header.css';
import logo from '../../img/logo.png';
import {Link} from "react-router-dom";

function Header() {
    return (
      <div>
        <Box className="do-header">
            <Typography variant='h6' sx={{flexGrow:1}}>
                <img src={logo} alt="logo"/>
                Friendship Center
            </Typography>
            <Stack className="do-menu" direction='row' spacing={2}>
                <Link className='active' to="/" style={{textDecoration: 'none'}}>Home</Link>
                <Link to="/about" style={{textDecoration: 'none'}}>About Us</Link>
                <Link to="/event" style={{textDecoration: 'none'}}>Event</Link>
                <Link to="" style={{textDecoration: 'none'}}>Gallery</Link>
                <Link to="/contact" style={{textDecoration: 'none'}}>Contact Us</Link>
            </Stack>
        </Box>
      </div>
    );
}

export default Header;