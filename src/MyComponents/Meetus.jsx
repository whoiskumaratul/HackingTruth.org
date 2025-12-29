import React from "react";
import { NavLink } from "react-router-dom";
import web from "../../src/MyComponents/images/meetup.png";
import web1 from "../../src/MyComponents/images/cyber-security-seminar-at-ranchi-university.png";

import webimage from "../../src/MyComponents/images/a.png";
import webphoto from "../../src/MyComponents/images/b.png";
import webpic from "../../src/MyComponents/images/c.png";

const Meetus = () => {
    return (
        <>
          
          <div className="container">
          <div className="my-5">
              <h1 className="text-center  text-uppercase">Talk Delivered <strong>(Seminar)</strong></h1>
              </div>
          </div>
        

     <div className="container-fluid ">
        <div className="row ">
          <div className="col-10 mx-auto ">
         
            
          <div className="card mb-5" id="carding">
  <img className="card-img-top" src={web} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Seminar on Ethical Hacking</h5>
    <p className="card-text">Venue - Near Nirmala college, Doranda Ranchi.</p>
    <p className="card-text"><small className="text-muted">Last updated 2 years ago</small></p>
  </div>
</div>

         </div>
        </div>
     </div>



     

     <div className="container-fluid ">
        <div className="row ">
          <div className="col-10 mx-auto ">
         
            
          <div className="card mb-5" id="carding">
  <img className="card-img-top" src={web1} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Seminar on Cyber Security / Ethical Hacking</h5>
    <p className="card-text">Venue - Ranchi University Ranchi.</p>
    <p className="card-text"><small className="text-muted">Last updated few days ago</small></p>
  </div>
</div>

         </div>
        </div>
     </div>



     
        
     <div className="my-4">
              <h1 className="text-center  text-uppercase">Book a <strong>Slot</strong></h1>
          </div>
        
      <div className="container-fluid mb-5 ">
        <div className="row">
          <div className="col-10 mx-auto">
          <p class="py-3">This page introduce you about free seminars, workshops, how we go to School, Colleges, University or to those people who 
          are really hungry for knowledge. How can you make a career in the field of cyber security, how to make people aware to avoid 
          cyber attacks and be aware of yourself. To conduct the seminar, you can book your slot by clicking on the slot button and tie 
          the waist belt because we are coming to you. </p>
            <div className="row gy-4"> 
              
              
      <div className=" col-md-4 col-10 mx-auto">
                <div className="card">
                  <img src={webimage} className="card-img-top" alt="services" />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">Career on Cyber Security</h5>
                    <p className="card-text">
                     Cybersecurity foundational course for beginners that covers the basics and the main areas of IT security 
                    and data protection. After completing a course in cybersecurity, you will be equipped to begin working within an IT security team within an 
                    organization.
                    </p>
                    <p className="card-text">Fee <del>5000 &#8377; </del> &nbsp;Free</p>
   
                    <NavLink to="" className="btn btn-primary">
                      Slot Booking
                    </NavLink>
                  
                    </div>
                  <div className="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
              </div>
                  
                  
                  
      <div className=" col-md-4 col-10 mx-auto">
                <div className="card">
                  <img src={webphoto} className="card-img-top" alt="services" />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">All about Web Developing</h5>
                    <p className="card-text">
                    Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from 
                    developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.
                    </p>
                    <p className="card-text">Fee <del>5000 &#8377; </del> &nbsp;Free</p>
   
                    <NavLink to="" className="btn btn-primary">
                    Slot Booking
                    </NavLink>
                   
                  </div>
                  <div className="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
              </div>
                  
                  
      <div className=" col-md-4 col-10 mx-auto">
                <div className="card">
                  <img src={webpic} className="card-img-top" alt="services" />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">All about Home Automation</h5>
                    <p className="card-text">
                    “Home automation” refers to the automatic and electronic control of household features, activity, and appliances. In simple terms, it means you can
                     easily control the utilities and features of your home via the Internet to make life more convenient and secure, and even spend less on household bills.
                    </p>
                    <p className="card-text">Fee <del>5000 &#8377; </del> &nbsp;Free</p>
   
                    <NavLink to="" className="btn btn-primary">
                    Slot Booking
                    </NavLink>
                  
                    </div>
                  <div className="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
              </div>
                  




            </div>
          </div>
        </div>
      </div>

        </>
   /*

<div className="card ">
<img className="card-img-bottom" src={web} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
  </div>
  
</div>


   */




   );
};

export default Meetus;
