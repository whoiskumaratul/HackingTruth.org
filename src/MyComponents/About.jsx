import React from "react";
//import '../index.css';
import web from "../../src/MyComponents/images/about.png";
import webmacbook from "../../src/MyComponents/images/macbook.png";
import { NavLink } from "react-router-dom";
import Academyaboutcommon  from "./Academyaboutcommon";



const About = ()=> {
  return (
    <>		

    <Academyaboutcommon  name="Welcome To" othername="Hacking Truth" anothername=" About Page" imgsrc={web} visit="/contact" btname="Contact Now" headtwo="The less people know about us"/>
      
	  
	  
	  
    <div className="container-fluid mb-5 ">
        <div className="row">
          <div className="col-10 mx-auto">

	 

<section className="section-padding about-section pt-4" id="about">
 
   <div className="row"> 
     <div className="col-sm-6">
       <div className="section_title">
         <div className="section_subtitle">About Us</div>
            <h2 className="section_main_title text-uppercase">we are<strong> creative</strong></h2>
              </div>
                <div className="about-item">
                   <p>We are creative we do things a bit differently, and that's the way we like it!.</p>
                     <p>Hacking is about ingenuity in any walk of life. “Creative solution” or “being entrepreneurial” have replaced hacking in the vocabulary of most because of the distancing people want to make from the computer hackers. We don't want to be tainted by the malicious intent that the word hacker has become associated with. A few thoughts on brain hacks for driving creative thinking forward.</p>
                       
                         
       </div>
         </div>
		 
<div className="col-sm-4 col-sm-offset-2">
  <div className="about-box">
    <img alt="hackingtruth about" className="img-fluid " src={webmacbook} />
       </div>
         </div>
           </div>

   
    </section>
      </div>
        </div>
           </div>
  
  
  
  
	</>
   

   
    //<h1>Welcome To Home Page</h1>
  );
}

export default About;
