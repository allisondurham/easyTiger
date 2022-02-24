
import React from "react";
import bg from "../../assets/stage.jpg";
import image from "../../assets/michael.jpg";

export default function Michael () {
  return (

    <div className="home mt-0   relative">
    <img className="stripe" src={bg} alt="" ></img>

    <div class="container mt-10 bg-stone-800/80 p-4 z-0 rounded-2xl ">
        <img
            class="rounded-xl  sepia contrast-125"
                src={image}
                alt=""
            />
          <div class="  py-4 px-2 text-stone-400 ">
            <h1 class="py-2 text-left font-weight-light">Michael - Slappin' the Bass </h1>
             <p class=" pt-2 text-left font-weight-light">
               This guy brings the party.  He sets the tempo.  He drives us.  He does fancy things.  He knows exactly what he's doing, and we're glad he's doing it with us.             </p>
             <p className="pt-2 text-left font-weight-light">
               He enjoys long walks on the beach, but doesn't much care for sand. Get this man a whiskey, he's earned it.</p>
           </div>
    </div>      
    </div>  
);
  }

