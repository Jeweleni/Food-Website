import React from "react";

const Reciepe =()=>{
    const alpha=["A", "B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    return(
        <>
            {
                alpha.map(item=>{
                    return(
                        <div className="numbox">
                            <h3>{item}</h3>
                        </div>
                    )
                })
            }
        </>
    )
}
export default Reciepe