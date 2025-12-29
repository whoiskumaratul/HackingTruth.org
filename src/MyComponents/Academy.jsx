import React from "react";
import web from "../../src/MyComponents/images/academyhackingtruth.png";
import { NavLink } from "react-router-dom";
import Academyaboutcommon from "./Academyaboutcommon";

const Academy = () => {
    
    return (
       <>
     
      <Academyaboutcommon name="Welcom To " othername="Hacking Truth" anothername=" Academy Page" imgsrc={web} visit="/academy" btname="Prepare Yourself" academy="Learn about us" />
       </>



    );
};

export default Academy;