import React from "react";
import bg from "../assets/stage.jpg";
import image from "../assets/elaine.jpg";

export default function Contact() {
  return (

    <div className="home mt-0   relative">
      <img className="stripe" src={bg} alt="" ></img>
      <div class="container  bg-stone-800/80 p-4 z-0 rounded-2xl ">
        <img
          class="rounded-xl  sepia contrast-125"
          src={image}
          alt=""
        />
        <div class="  p-4  text-stone-400 ">
          <h1 class="py-2 text-left font-weight-light">Contact - </h1>
          <p class=" pt-2 text-left font-weight-light">
            The best way to get ahold of us is to come to our shows and talk to us there. 
            The second best way is to email Elaine at  &nbsp;
            <a href="mailto:r.elaine.atwell@gmail.com" className="truffle mail mr-20 lg:mr-6"> r.elaine.atwell@gmail.com  </a>
          </p>
        </div>
      </div>      
    </div>  
  );
}




