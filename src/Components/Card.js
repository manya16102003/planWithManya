import { useState } from "react";


function Card({id , image , info , price , name , removeTour})
{
    const[readmore , setReadmore] =useState(false);
    //if readmore is true then whole information 'ínfo'will be shown else sunstring of 200 character willl be shown 
    const description=readmore ?info :`${info.substring(0,200)}....`

    function readmoreHandler()
    {
        setReadmore(!readmore);
    }
    
    return(
        <div className="card">
            <img src={image} className="image"></img>
            <div className="tour-info">
            <div className="tour-details">
                <h4 className="tour-price">{price}</h4>
                <h4 className="tour-name">{name}</h4> 
            </div>
            <div className="description">
                {description}
                <span className="read-more" onClick={readmoreHandler}>
                    {/* if readmore is true than show 'show less' else show 'read more' */}
                    {readmore ?`show less`:`read more`}
                </span>
            </div>
            </div>
            
            <button className="btn-red" onClick={()=> removeTour(id)}> Not Interested </button>
        </div>
    )

}
export default Card;