import React from 'react'
import './NavBar.css'
import { Grid } from '@mui/material'
import logo from "./nj_logo.png"

const NavBar = () => {
  return (
    <div className='navbar'>
      <Grid container>
        <img className='logo' src={logo} alt={"logo"}></img>
        <img className='avatar' src='https://pro2-bar-s3-cdn-cf1.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/98032aebff601c1d993e12a0_rw_600.png?h=8030f4d5734548795c22da59ca72e3e1'></img>

      </Grid>
       
    </div>
  )
}

export default NavBar