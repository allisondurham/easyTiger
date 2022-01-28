import React from "react";
// import image from "../assets/easytiger1.jpg";
// import image from "../assets/tiger.jpg";
import image from "../assets/easiest.png";

export default function Home() {

    return (
        <div className="home mt-24 md:mt-16 mb-0 pb-10 bg-yellow-700 ">
            <div className="pt-8 px-4 md:p-10 lg:pt-6 pb-20">
            <div class="container bg-stone-800/90 p-4 rounded-2xl ">
                <img
                    class="rounded-2xl "
                        src={image}
                        alt=""
                    />
                <p className="text-stone-400  py-4">
                    Easy Tiger is our band, we play music.  people like us. 
                </p>
            </div>      
            </div>
        </div>    
    );
}

