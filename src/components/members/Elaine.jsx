
import React from "react";
import bg from "../../assets/stage.jpg";
import image from "../../assets/elaine.jpg";

export default function Elaine() {
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
            <h1 class="py-2 text-left font-weight-light">Elaine - Lead Singer & Trusted Songwriter </h1>
             <p class=" pt-2 text-left font-weight-light">
               Elaine writes songs.  She writes other things too.  She's a writer, and she's our writer.
             </p>
             <p className="pt-2 text-left font-weight-light">
               Hailing from the mountains, i think she fell in love with folk, maybe americana, some appalachia vibes. 
               </p>
             <p className="pt-2 text-left font-weight-light">
               Her dog Okra is our grumbliest fan.
               </p>
           </div>
    </div>      
    </div>  
);
  }


