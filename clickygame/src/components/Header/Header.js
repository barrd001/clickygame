import React from 'react';
import './Header.css';
import Logo from '../../Images/ncaaf.png';
// import {NavLink} from 'react-router-dom'

const Header = () => {
  return(
   
<header>
  <div className="container valign-wrapper">
    <div className="row">
  <div className="col S4 left">
  <img className='responsive-img left ' src={Logo} alt="NCAAF Logo"/>
  </div>
  <div className="col s8">
     <h1 className='right-align'>NCAAF Clicky Game!</h1>
     </div>
     </div>
     </div>
       </header>
  )
}

export default Header;