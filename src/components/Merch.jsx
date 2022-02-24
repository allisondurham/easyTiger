import React from "react";
import image from "../assets/easiest.png";

function Merch() {
  return (
    <div className="about home tiger px-4 mt-24 md:mt-16 py-10">
      <div class="container bg-stone-800/80 my-10 rounded-xl px-4">
        <div class="row align-items-center  my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={image}
              alt=""
            />
          </div>
          <div class="p-4 md:ml-10 col-lg-5 text-stone-400 ">
            <h1 class="py-2 font-weight-light">Merch</h1>
            <p>
              lol, so... we don't have any merch yet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Merch;