import React, { useState } from "react";
import data from './data';
import Tours from "./Components/Tours";
const App = () => {

  const [tours , setTours]= useState(data);

  function removeTour(id){
    const newtour=tours.filter(tour=>tour.id!==id);
    setTours(newtour);
        
  }

  if(tours.length===0)
    {
      return(
        <div className="refresh">
          <h2> No Tours Left</h2>
          <button className="btn-white"  onClick={()=> setTours(data)}> Refresh</button>
        </div>
      )
    }
  return(
    <div className="App"> 
      <Tours  tours={tours} removeTour={removeTour}></Tours>
     </div>
  )
};

export default App;
