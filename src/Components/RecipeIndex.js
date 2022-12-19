
import React from "react";

const Recipe =({alphaIndex})=>{
    const alpha=["A", "B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var num=0;
    return(
        <>
            {
                alpha.map(type=>{
                    return(
                        <div className="numBox" key={num++} onClick={()=>alphaIndex(type)}>
                            <h3>{type}</h3>
                        </div>
                    )
                })
            }
        </>
    )
}
export default Recipe