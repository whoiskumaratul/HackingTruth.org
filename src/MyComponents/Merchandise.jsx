import React from "react";
import web from "../../src/MyComponents/images/store.png";
import web2 from "../../src/MyComponents/images/mugg.png";
//import web from "../../src/MyComponents/images/hacker.png";
import { NavLink } from "react-router-dom";
//import Common from "./Common";


const Merchandise = (props) => {

    return (

        <>
         

    <section id="header" className="d-flex align-items-center container-fluid">
    
    <div className="container-fluid ">
        <div className="row">
          <div className="col-10 mx-auto">
           <div className="row">
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
              <h1>Welcome to <strong className="brand-name"> Merchandise </strong>Page
              
               <strong className="brand-name"> {props.othername}</strong></h1>
               <h2 className="my-3">Print For Your Favourite one{props.para}</h2>
                <div className="mt-3"> 
                <a href="https://shop.hackingtruth.org" target="_blank" className="btn-get-started">Shop Now </a>
                
                </div>  
            </div>

            <div className="col-lg-5 order-1 order-lg-2 header-img ">
             <img src={web} className="img-fluid animated" alt="hackingtruth"  />
            </div>
            </div>


          </div>
        </div>
     </div>
     
    
    </section>	


    <div className="container-fluid mb-5 ">
        <div className="row">
          <div className="col-10 mx-auto">

	 

<section className="section-padding about-section pt-4" id="about">
 
   <div className="row"> 
   <div className="col-sm-4 col-sm-offset-2">
  <div className="about-box">
    <img alt="hackingtruth about" className="img-fluid " src={web2} />
       </div>
         </div>
     <div className="col-sm-6">
       <div className="section_title">
         <div className="section_subtitle">Cup of Love</div>
            <h2 className="section_main_title text-uppercase">Customize Your <strong>Mug</strong></h2>
              </div>
                <div className="about-item">
                   <p>Create your Own Customized Mug / Coffee Cups at shop.hackingtruth.org. </p>
                     <p>Add your photos, logos or text to the mug and get it printed in High-Definition Picture quality. The mugs are made up of highly durable ceramic material and the photo print on them is extremely gorgeous.</p>
                       
                         
       </div>
         </div>
		 

           </div>

   
    </section>
      </div>
        </div>
           </div>
  
  


	
        </>
		//<Common name="Welcome to Blog Page" imgsrc={web} visit="/blog" btname="Read Article" />
        
    );
};


export default Merchandise;