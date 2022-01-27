import React from "react";
import image from "../assets/easytiger1.jpg";

export default function Home() {

  return (
    <div className="home mt-16 bg-yellow-700 ">
      <div class="container">
        <div class="py-4">
          <div class="">
            <img
              class="rounded-xl mb-4 mb-lg-0"
              src={image}
              alt=""
            />
          </div>
          <div class="">
            <h1 class="">Home</h1>
            <p>
                Easy Tiger is our band, we play music really good!  people like us. one fan at a time!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

