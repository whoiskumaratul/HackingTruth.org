import React from "react";
import { NavLink } from "react-router-dom";
//import web from "../../src/MyComponents/images/ethicalhackingclassesshackingtruth.png";


const Card = (props) => {
  return (

    // gy= gutter horizontal 
    // gx= gutter vertical
    <>
      
      <div className=" col-md-4 col-10 mx-auto">
                <div className="card">
                  <img src={props.imgsrc} className="card-img-top" alt="services" />
                  <div className="card-body">
                    <h5 className="card-title text-uppercase font-weight-bold">{props.title}</h5>
                    <p className="card-text">
                      {props.paragraph}
                    </p>
                    <NavLink to="" className="btn btn-primary">
                      Go somewhere
                    </NavLink>
                  </div>
                </div>
              </div>

            
    </>
  );
};

export default Card;
