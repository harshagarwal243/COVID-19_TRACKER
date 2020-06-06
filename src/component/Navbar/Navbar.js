import React from "react";
import "./Navbar.css";
import icon from "../../assets/virus.svg";
import { Link } from 'react-router-dom';
import Radium from 'radium';

const Nav = () => {
  
  
  return (
      <div className="navbar">
      <div className="navbar-1">
        <img src={icon} alt="earth's antivirus" style={{marginRight:"0px"}} />
      </div> 
      <div className="navbar-2">
         <span style={{color:"red",fontSize:"135%",fontWeight:"bold",zindex:"1"}}>COVID-19</span>
          <ul>
            <li>
                 <Link className="Link" to="/" > HOME </Link>
            </li>
            <li>
                 <Link className="Link" to="/faq"> FAQ </Link>
            </li>
            <li >
                 <Link className="Link" to="/helpfullinks"> HELPFUL LINKS </Link>
            </li>
          </ul>
       </div>
      </div>
  );
};

export default  Radium(Nav);
