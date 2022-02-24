import React from "react";
// import image from "../assets/easytiger1.jpg";
// import image from "../assets/tiger.jpg";
// import image from "../assets/easiest.png";
import image from "../assets/eeeasytiger.png";
// import bg from "../assets/stripes3.jpg";
// import bg from "../assets/stripes.png";
import bg from "../assets/stage.jpg";

export default function Home() {

    return (
        <div className="home mt-0   relative">
            <img className="stripe" src={bg} alt="" ></img>

            <div class="container  bg-stone-800/90 p-4 z-0 rounded-2xl ">
                <img
                    class="rounded-2xl "
                    src={image}
                    alt=""
                />
                <p className="slogan text-stone-400  py-4">
                    Easy Tiger is our band, we play music.  people like us. 
                </p>
            </div>      
        </div>  
    );
}

