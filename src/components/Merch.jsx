import React from "react";
import image from "../assets/easiest.png";
import bg from "../assets/stage.jpg";

export default function Merch() {
  return (

    <div className="home mt-0   relative">
    <img className="stripe" src={bg} alt="" ></img>

    <div class="container  bg-stone-800/80 p-4 z-0 rounded-2xl ">
        <img
            class="rounded-xl  sepia contrast-125"
                src={image}

                alt=""
            />
        {/* <p className="text-stone-400  py-4">
            Easy Tiger is our band, we play music.  people like us. 
        </p> */}
          <div class="  p-4  text-stone-400 ">
            <h1 class="py-2 text-left font-weight-light">Merch - </h1>
             <p class=" pt-2 text-left font-weight-light">
               lol, so... we don't have any merch yet.
             </p>
           </div>
    </div>      
    </div>  
);
  }



