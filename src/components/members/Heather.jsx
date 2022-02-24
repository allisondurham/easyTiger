
import React from "react";
import bg from "../../assets/stage.jpg";
import image from "../../assets/heather.jpg";

export default function Heather() {
  return (

    <div className="home mt-0   relative">
      <img className="stripe" src={bg} alt="" ></img>
      <div class="container mt-10 bg-stone-800/80 p-4 z-0 rounded-2xl ">
        <img
          class="rounded-xl  sepia contrast-125"
          src={image}
          alt=""
          width="100%"
        />
        <div class="  py-4 px-2 text-stone-400 ">
          <h1 class="py-2 text-left font-weight-light">Heather - Charm & Vocals </h1>
          <p class=" pt-2 text-left font-weight-light">
            She's a badass who takes no shit from no one. She spent a lot of time in New Orleans and her musical stylings are super fly.
          </p>
          <p className="pt-2 text-left font-weight-light">
            Heather likes country music.  Not that new stuff, but the real, old, good stuff.  Cowboy butts drive her nuts.  
          </p>
          <p className="pt-2 text-left font-weight-light">
            Less Honkin', More Tonkin'.
          </p>
        </div>
      </div>      
    </div>  
  );
}

