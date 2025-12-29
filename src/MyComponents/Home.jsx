import React from "react";
//import '../index.css';
import web from "../../src/MyComponents/images/hacker.png";
//import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Common from "./Common";



const Home = ()=> {
  return (
    <>		
<Common  name="Grow Your Skills with " othername="Hacking Truth" imgsrc={web} visit="/service" btname="Get Started"  para="We are creative we do things a bit differently and that's the way we like it" /> 
           
		   
		   
		   
		   
		   
	</>
   
    //<h1>Welcome To Home Page</h1>
  );
};


export default Home;
