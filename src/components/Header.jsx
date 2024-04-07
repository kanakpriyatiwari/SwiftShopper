// Header.jsx

import React from 'react';
import '../Header.css';

import Welcome from './Welcome';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      {/* <h1>SwiftShopper</h1> */}
      {/* <hr /> */}
   <nav className="navbar navbar-expand-sm navbar-dark">
   <div className="container">
    <a className="navbar-brand" id="swiftshopper" href="/">KanakShopper</a>
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"    aria-label="Toggle navigation" >
  <span className="navbar-toggler-icon"></span>
   </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">

          
            <ul className="navbar-nav items">
             <li className="nav-item"><Link to={'/Regist'} >REGISTRATION </Link></li>
              <li className="nav-item"><Link to={'/Login'} >LOGIN </Link></li>
              <li className="nav-item"><Link to={'/Contact'} >CONTACT </Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <Welcome/> */}

      



    </>
  );
}

export default Header;
