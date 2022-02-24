
import React from "react";
import bg from "../../assets/stage.jpg";
import image from "../../assets/anthony.png";

export default function Anthony() {
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
          <h1 class="py-2 text-left font-weight-light">Anthony - Electric Guitar </h1>
          <p class=" pt-2 text-left font-weight-light">
            He's a badass musician with lots of shiny pedals and the talent, experience, and skill to know what to do with all of them.
          </p>
          <p class=" pt-2 text-left font-weight-light">
            He has his own projects too and i'd link them here if he'd ever tell me what they are. 
          </p>
          <p class=" pt-2 text-left font-weight-light">
            Mysterious, this one.
          </p>
        </div>
      </div>      
    </div>  
  );
}



