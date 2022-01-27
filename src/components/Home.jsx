import React from "react";
import image from "../assets/easytiger1.jpg";

export default function Home() {

  return (
    <div className="home mt-16 bg-yellow-700 py-16 lg:pt-6 lg:pb-20">
      <div class="container bg-stone-800 rounded-xl">
            <img
              class="rounded-xl  mb-lg-0"
              src={image}
              alt=""
            />
            <p className="text-yellow-700 py-4">
                Easy Tiger is our band, we play music real good!  people like us. one fan at a time!
            </p>
          </div>
          <div class="">

          </div>
    </div>
  );
}

