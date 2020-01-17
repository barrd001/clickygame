import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper z-depth-4">
        <div className="row">
        <div className="col s4 left center-align">NCAAF Clicky Game</div>
        <div className="col s4 center-align">You Win</div>
        <div className="col s4 right center-align">Score</div>
      </div>
      </div>
    </nav>
  )
}

export default Navbar