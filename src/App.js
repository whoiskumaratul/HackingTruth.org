import React from "react";
//import { Switch , Route} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";



import  Home  from "./MyComponents/Home";
import  Service  from "./MyComponents/Service";
import Academy from "./MyComponents/Academy";
import Merchandise from "./MyComponents/Merchandise";
import Blog from "./MyComponents/Blog";
import  Meetus  from "./MyComponents/Meetus";
import Internship from "./MyComponents/Internship";
import  About  from "./MyComponents/About";
import  Contact  from "./MyComponents/Contact";
import Faq from "./MyComponents/Faq";
import Privacypolicy from "./MyComponents/Privacypolicy";

import { Redirect } from 'react-router';
//import Topnavbar from "./MyComponents/Topnavbar";
import Navbar from "./MyComponents/Navbar";
import Footer from "./MyComponents/Footer";





import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const App = ()=> {
  return (
    <>

  
    
    <Router>
  
      <Navbar />
     <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/academy" component={Academy} />
		<Route exact path="/merchandise" component={Merchandise} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/meetus" component={Meetus} />
		<Route exact path="/internship" component={Internship} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/Faq" component={Faq} />
		<Route exact path="/Privacypolicy" component={Privacypolicy} />
        
        
        <Redirect to="/" />
        
        
      </Switch>
      <Footer />
      </Router>
      </> 
		//<h1>Welcome</h1>
     
  );
}

export default App;
