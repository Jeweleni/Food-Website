import React from "react";

const MealType=({data})=>{
    console.log(data)
    return(
        <>
           {
            (!data) ? "Not Found" :data.map(item =>{
                return(
                    <div className="card">
            <img src={item.strMealThumb} alt="foodimage"/>
            <h3>{item.strMeal}</h3>
           </div>
                )
            })
           }

        </>
    )
}
export default MealType; 