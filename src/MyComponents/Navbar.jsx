import React from "react";

import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import {FaFacebook} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import {FaDiscord} from "react-icons/fa";


const Navbar = () =>{


    return (
     <>

  
	
<div class="container ">
<div id="top-bar">
  <div class="row">
    <div class="col">
    <ul className="nav">
<li className="nav-item-social"><a href="https://www.fb.com/hackingtruthin" target="_blank" className="nav-link-item"><FaFacebook /></a></li>
<li className="nav-item-social"><a href="https://www.twitter.com/hackingtruthin" target="_blank"  className="nav-link-item"><FaTwitter /></a></li>
<li className="nav-item-social"><a href="https://www.linkedin.com/company/hackingtruthin"  target="_blank" className="nav-link-item"><FaLinkedin /></a></li>
<li className="nav-item-social"><a href="https://www.instagram.com/hackingtruthin" target="_blank"  className="nav-link-item"><FaInstagram /></a></li>
<li className="nav-item-social"><a href="https://www.youtube.com/channel/UCa2s3RmE4B-hRsgKSjJLx_w" target="_blank"  className="nav-link-item" ><FaYoutube /></a></li>
<li className="nav-item-social"><a href="https://www.discord.com/"  target="_blank" className="nav-link-item" ><FaDiscord /></a></li>

</ul>
    </div>
    
    <div class="col col-lg-2">
    <ul className="nav">
    <li id="contact-info"><Link to="mailto:contact@hackingtruth.org?subject=subject&cc=cc@hackingtruth.org"  className="nav-link-item" >contact@hackingtruth.org</Link></li>
    </ul>
    </div>
    </div>
  </div>
</div>

           


     <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto ">
         

          

<nav className="navbar navbar-expand-lg navbar-light " >
  <div className="container-fluid">
  <NavLink to="/" ><img src="./hacking-truth-text-2.gif" class="img-fluid navbar-brand"  alt="Hacking Truth">
 
  </img></NavLink>
  
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink activeClassName="menu_active" exact className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" to="/service">Services</NavLink>
        </li>

        
        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" to="/academy">Academy</NavLink>
        </li>
		
		<li className="nav-item">
		   <NavLink activeClassName="menu_active" className="nav-link" to="/merchandise">Merchandise</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" to="/blog">Blog</NavLink>
        </li>
        
        
        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" to="/Meetus" >Meet-us</NavLink>
        </li>

         
        
        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" to="/Internship" >Internship</NavLink>
        </li>


        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" to="/about">About</NavLink>
        </li>


        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" to="/contact">Contact</NavLink>
        </li>
  
       <li className="nav-item">
         <NavLink activeClassName="menu_active" className="nav-link" to="/faq">FAQ</NavLink>
       </li>

        
      </ul>
      </div>
    </div>
  
</nav>


</div>
        </div>
     </div>


     </>
    );
};

export default Navbar;