//import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useState } from 'react';


import {FaFacebook} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import {FaDiscord} from "react-icons/fa";


const Footer = () =>{
	
	
	
	const [data, setData] = useState({
        email: "",
        msg: "",

    });

     const InputEvent = (event) =>{

        const {name, value} = event.target;
         
        setData((preVal) => {
            return {

                ...preVal, 
                  [name] : value,
                  
            };
        }); 
    
    };




    
const formSubmit = (e) => {
         
      e.preventDefault();
      alert(`
      My Email is ${data.email}, Here is i want to subscribe your newsletter ${data.msg}`
       
      );
    };

	
	
	
	
    return (
    <>
      
	  
	  
      
	   <div className="container-fluid mt-5  bg-secondary">
	      <div className="row">
		    <div className="col-10 mx-auto">
				
		<div className="Container">
		
	  
			<form onSubmit={formSubmit}>
			 <div class="mt-3">
          <h5>Subscribe to our newsletter</h5>
		  </div>
          <div className="d-flex w-100 gap-2 mb-3">
            <label htmlFor="exampleFormControlInput1"  class="form-label"></label>
            <input id="exampleFormControlInput1" name="email" type="email" class="form-control" value={data.email}  onChange={InputEvent} placeholder="Email address" />
            <button className="btn btn-primary" type="submit">Subscribe</button>
          </div>
        </form>
		</div>
		
 </div>
 </div>
 </div>
 
 
 
 
    
      
	   <div className="container-fluid   bg-dark">
	      <div className="row">
		    <div className="col-10 mx-auto">
				
			
			
			
		
 <footer className="py-3 social-item-link ">

<div className="row justify-content-center mt-3" >
  <div className="col-6">
  <h5>Section</h5>
        <ul className="nav flex-column" id="htext">
          <li className="nav-item mb-2"><NavLink to="/" className="social-item-link p-0 text-muted">Home</NavLink></li>
          <li className="nav-item mb-2"><NavLink to="/Service" className="social-item-link p-0 text-muted">Services</NavLink></li>
          <li className="nav-item mb-2"><NavLink to="/Academy" className="social-item-link p-0 text-muted">Academy</NavLink></li>
          <li className="nav-item mb-2"><NavLink to="/Merchandise" className="social-item-link p-0 text-muted">Merchandise</NavLink></li>
          <li className="nav-item mb-2"><NavLink to="/Blog"  className="social-item-link p-0 text-muted">Blog</NavLink></li>
          <li className="nav-item mb-2"><NavLink to="/Meetus" className="social-item-link p-0 text-muted">Meet-us</NavLink></li>
          <li className="nav-item mb-2"><NavLink to="/Internship" className="social-item-link p-0 text-muted">Internship</NavLink></li>
          <li className="nav-item mb-2"><NavLink to="/About" className="social-item-link p-0 text-muted">About</NavLink></li>
          <li className="nav-item mb-2"><NavLink to="/Contact" className="social-item-link p-0 text-muted">Contact</NavLink></li>
          <li className="nav-item mb-2"><NavLink to="/Faq" className="social-item-link p-0 text-muted">FAQs</NavLink></li>	
		</ul>
  
  
  </div>
    
  
  
  <div className="col-4"><h5>Connect</h5>
  
       <ul className="nav flex-column">
       <li className="mb-2"><a href="https://www.fb.com/hackingtruthin" target="_blank" className="social-item-link p-2 text-muted"><FaFacebook /> Facebook</a></li>
       <li className="mb-2"><a href="https://www.twitter.com/hackingtruthin" target="_blank" className="social-item-link p-2 text-muted "><FaTwitter /> Twitter</a></li>
       <li className="mb-2"><a href="https://www.linkedin.com/company/hackingtruthin" target="_blank" className="social-item-link p-2 text-muted "><FaLinkedin /> Linkedin</a></li>
	   <li className="mb-2"><a href="https://www.instagram.com/hackingtruthin" target="_blank" className="social-item-link p-2 text-muted"><FaInstagram /> Instagram</a></li>
	   <li className="mb-2"><a href="https://www.youtube.com/channel/UCa2s3RmE4B-hRsgKSjJLx_w" target="_blank" className="social-item-link p-2 text-muted"><FaYoutube /> YouTube</a></li>
        <li className="mb-2"><a href="https://www.discord.com/" target="_blank" className="social-item-link p-2 text-muted"><FaDiscord /> Discord</a></li>
     
	  </ul>
   
  
  </div>
  
  
  	
			
	 <p className="text-center">&copy; 2022 Hacking Truth Cyber Security Company. OPC. All Rights Reserved. <NavLink to="/Privacypolicy" >Privacy Policy</NavLink> </p>
    
	
	
  
</div>	
		
    </footer>

   </div>
</div>
</div>   
	 

</>
	
	
	
	
    );
};

/*
 <label htmlFor="newsletter1 exampleFormControlInput1" type="email" name="email" id="exampleFormControlInput1"  class="visually-hidden form-control" value={data.email} onChange={InputEvent}>Email address</label>
            <input id="newsletter1" type="text" class="form-control" placeholder="Email address" />
            <button className="btn btn-primary" type="submit">Subscribe</button>
         

*/
export default Footer;