import React, { isValidElement } from "react";
import { NavLink } from "react-router-dom";
import Card from "./Card";
import Servicedata from "./Servicedata";

const Service = () => {
  return (

    // gy= gutter horizontal 2
    // gx= gutter vertical
    <>
      <div className="my-5">
        <h1 className="text-center text-uppercase"> Our Services</h1>
        <h4 className="text-center  text-uppercase">What we <strong>offer?</strong></h4>
      </div>

      <div className="container-fluid mb-5 ">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4"> 
              
              
              { Servicedata.map((val, ind) =>{
                 return (<Card key={ind} imgsrc={val.imgsrc}  title={val.title} paragraph={val.paragraph} />
                 )
             })}
                  
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
