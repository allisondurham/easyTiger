import React from "react";
import image from "../assets/easytiger1.jpg";
import bg from "../assets/stage.jpg";

export default function About() {
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
            <h1 class="py-2 text-left font-weight-light">About the band - </h1>
             <p class=" pt-2 text-left font-weight-light">
               Easy Tiger was formed when some unlikely companions got drunk and agreed 
               to make music together.  Elaine writes most of our songs, and the rest of us do other things.
             </p>
           </div>
    </div>      
    </div>  
);
  }

