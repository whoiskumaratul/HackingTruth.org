import React from "react";
import web from "../../src/MyComponents/images/blogcropimage.jpg";
//import web from "../../src/MyComponents/images/hacker.png";
import { NavLink } from "react-router-dom";
//import Common from "./Common";


const Blog = (props) => {

    return (

        <>
         

    <section id="header" className="d-flex align-items-center container-fluid">
    
    <div className="container-fluid ">
        <div className="row">
          <div className="col-10 mx-auto">
           <div className="row">
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
              <h1>Welcome to Blog Page
              
               <strong className="brand-name"> {props.othername}</strong></h1>
               <h2 className="my-3">{props.para}</h2>
                <div className="mt-3"> 
                <a href="https://blog.hackingtruth.org" target="_blank" className="btn-get-started"> Read Article </a>
                
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
        </>
		//<Common name="Welcome to Blog Page" imgsrc={web} visit="/blog" btname="Read Article" />
        
    );
};


export default Blog;