//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";


//import your own components
import TrafficLight from "./component/home.jsx";

//render your react application
ReactDOM.render(<TrafficLight />, document.querySelector("#app"));
