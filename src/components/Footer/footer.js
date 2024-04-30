import * as React from 'react';
import {Grid, Typography, Button,Container, TextField} from "@mui/material"
import './footer.css';
import facebook from '../../img/facebook.png';
import twitter from '../../img/twitter.png';

function Footer() {
    return (
      <div>
        <footer>
        <Container fixed>
          <Grid container spacing={2} className="">
            <Grid item xs={12} md={6}>
            <div className='footer-inner' sx={{mb: 4}}>
                <Typography variant="h3">GET IN TOUCH</Typography>
                <p>Join our mailing list to stay up to date and  get notices about our new releases!</p>
                <div component="form" className="do-subscribe">
                <TextField
                    name="email"
                    placeholder="mail@example.com"
                />
                <Button type="submit">Send</Button>
                </div>
            </div>
            <div className='footer-inner'>
                <Typography variant="h3">FOLLOW US</Typography>
                <div className='s-social'>
                    <img src={facebook} alt="facebook"/>
                    <img src={twitter} alt="twitter"/>
                </div>
            </div>
            </Grid>
            <Grid item xs={12} md={6}>
            <div className='footer-inner f-right'>
                <Typography variant="h3">IJFC</Typography>
                <div sx={{ width: '100%' }}>
                    <ul>
                        <li>Address: </li>
                        <li>Phone Number: <span>+91-..........</span></li>
                        <li>Email: <span>ijfc@gmail.com</span></li>
                        <li>Website: <span>www.ijfc.com</span></li>
                    </ul>
                </div>
            </div>
            </Grid>
          </Grid>
        </Container>
        </footer>
      </div>
    );
}

export default Footer;