import React from 'react';
import {NavLink} from 'react-router-dom'

const Header = () => {
  return(
    
     <nav>
     <div className='nav-wrapper'>
        <ul>
          <li>
            Logo  
          </li>
          <li>
            You did some shit
          </li>
          <li>
            Score | High Score
          </li>
          </ul>
        </div>
        
     </nav>
    
  )
}

export default Header;