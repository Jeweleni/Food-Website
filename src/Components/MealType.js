import React from "react";
import { useNavigate } from "react-router-dom";

const MealType=({data})=>{
    console.log(data)
    let navigate=useNavigate();
    return(
        <>
           {
            (!data) ? "Not Found" :data.map(type =>{
                return(
                    <div className="card" key={type.idMeal} onClick={()=>{navigate(`/${type.idMeal}`)}}>
                        <img src={type.strMealThumb} alt="foodimage"/>
                        <h3>{type.strMeal}</h3>
                    </div>
                )
            })
           }

        </>
    )
}
export default MealType; 
