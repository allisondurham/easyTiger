
import React from "react";
import bg from "../assets/stage.jpg";

export default function Music() {
  return (

    <div className="home mt-0   relative">
      <img className="stripe" src={bg} alt="" ></img>
      <div class="container  bg-stone-800/80 p-4 z-0 rounded-2xl ">
        <iframe title="Easy Tiger" className="rounded-xl " src="https://open.spotify.com/embed/artist/0QS8HiZaDpyGLTZUyHZ9SQ" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
        </iframe>
      </div>      
    </div>  
  );
}


