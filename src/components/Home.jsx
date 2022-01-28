import React from "react";
// import image from "../assets/easytiger1.jpg";
import image from "../assets/tiger.jpg";

export default function Home() {

  return (
    <div className="home mt-16 mb-0 bg-yellow-700 py-24 md:p-10 lg:pt-6 lg:pb-20">
      <div class="container bg-stone-800  rounded-xl">
            <img
              class="rounded-xl "
              src={image}
              alt=""
            />
            <p className="text-yellow-700 py-4">
                Easy Tiger is our band, we play music real good!  people like us. one fan at a time!
            </p>
          </div>
    </div>    
  );
}

