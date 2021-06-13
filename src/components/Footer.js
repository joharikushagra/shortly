import { Grid } from '@material-ui/core'
import React from 'react'
import './Footer.css';

function Footer() {
    return (
        <Grid container justify="space-around" alignItems="center" className="footer">
          <Grid item sm={4} xs={12} >
            <Grid container justify="center" alignItems="center">
            <h4>Made with &#128151;</h4>
            </Grid>
          </Grid>
          <Grid item sm={4} xs={12}>
           <Grid container justify="center" alignItems="center">
            <h4 style={{fontFamily:'Rock Salt'}}>SHORTLY</h4>
           </Grid>
          </Grid>
          <Grid item sm={4} xs={12}>
           <Grid container justify="center" alignItems="center">
            <h4>Contact Us</h4>
           </Grid>
          </Grid>
        </Grid>
    )
}

export default Footer
