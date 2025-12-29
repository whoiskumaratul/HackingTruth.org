import React from "react";
import web from "../../src/MyComponents/images/faqimage.png";
import { NavLink } from "react-router-dom";
import Academyaboutcommon from "./Academyaboutcommon";


const Faq = () => {
       return(          
    <>


    <section id="header" className="d-flex align-items-center">
  
    <div className="container-fluid ">
        <div className="row">
          <div className="col-10 mx-auto">
           <div className="row">
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
              <h1>Ask anything about <strong className="brand-name"> Hacking Truth</strong></h1>
              <h4>Frequently Asked Question</h4>
                           </div>

            <div className="col-lg-5 order-1 order-lg-2 header-img">
             <img src={web} className="img-fluid animated" alt="hackingtruth" />
            </div>
            </div>


          </div>
        </div>
     </div>
  
    
    </section>
    


    <div className="container-fluid mb-5 ">
        <div className="row">
          <div className="col-10 mx-auto">

          <div id="accordion">
    <div className="card">
      <div className="card-header">
        <NavLink className="btn" data-bs-toggle="collapse" to="#collapseOne">
          <strong>Tell me about your company ? </strong>
        </NavLink>
      </div>
      <div id="collapseOne" className="collapse show" data-bs-parent="#accordion">
        <div className="card-body">
          Hacking Truth is a cyber security company, We are creative we do things a bit differently, and that's the way we like it.
        </div>
      </div>
    </div>
    <div className="card">
      <div className="card-header">
        <NavLink className="collapsed btn" data-bs-toggle="collapse" to="#collapseTwo">
         <strong>What is the purpose of Hacking Truth ? </strong>
      </NavLink>
      </div>
      <div id="collapseTwo" className="collapse" data-bs-parent="#accordion">
        <div className="card-body">
          If we come to this earth, then we have to choose our purpose, our big aim is to save people from cyber attacks. Till then be safe, be alert, be careful.
        </div>
      </div>
    </div>
    <div className="card">
      <div className="card-header">
        <NavLink className="collapsed btn" data-bs-toggle="collapse" to="#collapseThree">
           <strong>What can Hacking Truth provide us ? </strong>
        </NavLink>
      </div>
      <div id="collapseThree" className="collapse" data-bs-parent="#accordion">
        <div className="card-body">
          The first priority of Hacking Truth is that it builds a heartfelt relationship with its client, after that it fulfills the need of the client. Our company provides penetration testing in cyber security and even conducts web development, online/offline seminars, workshops.
        </div>
      </div>
    </div>
	
	
	<div className="card">
      <div className="card-header">
        <NavLink className="collapsed btn" data-bs-toggle="collapse" to="#collapseFour">
           <strong>How to conduct Seminar/Workshop in cyber security ?</strong>
        </NavLink>
      </div>
      <div id="collapseFour" className="collapse" data-bs-parent="#accordion">
        <div className="card-body">
          To conduct the seminar, you can contact us directly through our contact page, apart from this you can also do slot booking from Meetus page.
       </div>
      </div>
    </div>
	
	
	
	<div className="card">
      <div className="card-header">
        <NavLink className="collapsed btn" data-bs-toggle="collapse" to="#collapseFive">
           <strong>How can i take your courses ? </strong>
        </NavLink>
      </div>
      <div id="collapseFive" className="collapse" data-bs-parent="#accordion">
        <div className="card-body">
          To learn something new and prepare yourself via our courses, you can join to our courses directly through our Academy page.
        </div>
      </div>
    </div>
	
	
	<div className="card">
      <div className="card-header">
        <NavLink className="collapsed btn" data-bs-toggle="collapse" to="#collapseSix">
           <strong>If i take your courses is it any benefit or will get certificate or certificate has any value ?</strong>
        </NavLink>
      </div>
      <div id="collapseSix" className="collapse" data-bs-parent="#accordion">
        <div className="card-body">
          Even if you take Google's course, you are not going to get any benefit until you have that curiosity to learn something new and at the same time our Well Trained Tutor will teach you. Yes of course we get certificate on course completion and certificate has value in market because hacking truth Trademark is registered and along with your knowledge, it also gives a different shine to your resume.        </div>
      </div>
      </div>
    </div>
	
	
	
	<div className="card">
	 <div className="card-header">
	  <NavLink className="collapsed btn" data-bs-toggle="collapse" to="#collapseSeven">
	     <strong>How can we do internship in hacking truth and what will be the category ?</strong>
	  </NavLink>
	 </div>
	<div id="collapseSeven" className="collapse" data-bs-parent="#accordion">
	  <div className="card-body">
	    We are going to start internship very soon.  This golden opportunity will be provided to many people on this platform.  Give me some time.
		
		</div>
	   </div>
	  </div>


</div>
   </div>
     </div>
	 
	 
	</>

    //<h1>Welcome To Home Page</h1>
  );

  };

export default Faq;