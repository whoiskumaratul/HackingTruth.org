import React from "react";
import { Link } from "react-router-dom";

const Topnavbar = () => {
  return (
    <>
      <div className="container-fluid top_bar" >
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <Link
                to="#"
                data-toogle="tooltip"
                data-placement="bottom"
                title="Facebook"
                className="social_icons"
              >
                <i
                  className="fa fa-facebook"
                  style="font-size: 18px; color:#fff;  "
                ></i>
              </Link>
              <Link
                to="#"
                data-toogle="tooltip"
                data-placement="bottom"
                title="Twitter"
                className="social_icons"
              >
                <i
                  className="fa fa-twitter"
                  style="font-size: 18px; color:#fff;"
                ></i>
              </Link>
              <Link
                to="#"
                data-toogle="tooltip"
                data-placement="bottom"
                title="YouTube"
                className="social_icons"
              >
                <i
                  className="fa fa-youtube-play"
                  style="font-size: 18px; color:#fff;"
                ></i>
              </Link>
              <Link
                to="#"
                data-toogle="tooltip"
                data-placement="bottom"
                title="Google-plus"
                className="social_icons"
              >
                <i
                  className="fa fa-google-plus"
                  style="font-size: 18px; color:#fff;"
                ></i>
              </Link>
            </div>
            <div className="col-sm-9 text-right contact_info">
              <span className="glyphicon glyphicon-envelope"></span>{" "}
              Contact@webwall.in&nbsp;&nbsp;
              <span className="glyphicon glyphicon-earphone"></span>{" "}
              +91-8877372173
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topnavbar;
