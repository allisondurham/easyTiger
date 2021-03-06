
import React from "react";
import bg from "../../assets/stage.jpg";
import image from "../../assets/allison.jpg";

export default function Allison() {
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
          <h1 class="py-2 text-left font-weight-light">Allison - Lead mandolin </h1>
          <p class=" pt-2 text-left font-weight-light">
            When she's not out kicking cans, she spends most of her time trying to get a software engineering job and looking after her dog.
          </p>
          <p className="pt-2 text-left font-weight-light">
            Played in the orchestra in middle school. Good at climbing on things. Enjoys the outdoors.  Fairly badass.
          </p>
        </div>
      </div>      
    </div>  
  );
}


