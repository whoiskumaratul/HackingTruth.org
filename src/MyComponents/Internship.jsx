import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import web from "../../src/MyComponents/internjobimage/internshipimage.png";
import webintern from "../../src/MyComponents/internjobimage/ethicalhacking.svg";
import webintern1 from "../../src/MyComponents/internjobimage/webdevelopment.svg";
import webintern2 from "../../src/MyComponents/internjobimage/programmingwithpython.svg";



const Internship = () => {
	
	
	let MyStyle  ={
	width: "20.5rem",
  
	}
	
	
      return (
	  
	  <>
	  <Common  name="Learn new-age skills on the go with" othername="Hacking Truth" imgsrc={web} visit="/service" btname="Get Started"  para="Our India 🇮🇳 moving towards Aatmanirbhar, make this process of getting jobs easy." /> 
           
		
	  
	  
	  
    <div className="container-fluid mb-5 ">
       <div className="row">
          <div className="col-10 mx-auto">

	  <div className="row row-cols-1 row-cols-md-3 g-4">
	  
	  <div className="col">
        <div className="card" style={MyStyle}>
          <img src={webintern} className="card-img-top " alt="Internship" />
            <div className="card-body">
               <h5 className="card-title text-uppercase center font-weight-bold">web app Penetration Testing</h5>
                  <p className="card-text">A penetration test, also known as a pen test, is a simulated cyber attack against your computer system to check for exploitable vulnerabilities.</p>
                     <NavLink to="/Internship" className="btn btn-secondary">Brochure Download</NavLink>
					 <div className="mt-2"> 
					   <NavLink to="/Internship" className="btn btn-primary ">Get this Internship</NavLink>
					 </div>
                  </div>
                </div>
              </div>

       <div className="col">
         <div className="card" style={MyStyle}>
           <img src={webintern1} className="card-img-top " alt="Internship" />
             <div className="card-body">
               <h5 className="card-title text-uppercase font-weight-bold">Web development</h5>
                 <p className="card-text">Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services. </p>
                   <NavLink to="/Internship" className="btn btn-secondary">Brochure Download</NavLink>
					   <div className="mt-2"> 
					   <NavLink to="/Internship" className="btn btn-primary ">Get this Internship</NavLink>
					 </div>
                 </div>
               </div>
             </div>

        
		 <div className="col">
           <div className="card" style={MyStyle}>
             <img src={webintern2} className="card-img-top " alt="Internship" />
               <div className="card-body">
                 <h5 className="card-title text-uppercase font-weight-bold">Programming with python</h5>
                   <p className="card-text">Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation.</p>
                     <NavLink to="/Internship" className="btn btn-secondary">Brochure Download</NavLink>
					   <div className="mt-2"> 
					   <NavLink to="/Internship" className="btn btn-primary ">Get this Internship</NavLink>
					 </div>
                   </div>
                 </div>
               </div>

           </div>
       
       </div>
    </div>
  </div>

  
  
  
	  </>
	  
   );
 };
 
 
export default Internship;