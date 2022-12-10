import React from "react";
import "./style.css";
import MealType from "./MealType";

const Meal = ()=> {
    return(
     
           <div className="main">
            <div className="heading">
                <h1>Find a Meal</h1>
                <h4>lorem, ipsum dolor sit amet consectetur adipiscing elit. placeat veritatis dictum error qui</h4>

            </div>
            <div className="searchbox">
                <input type="search" className="searchbar"/>
                

            </div>
            <div className="container">
                  <MealType/>
            </div>
           </div>
       
    )
}
export default Meal