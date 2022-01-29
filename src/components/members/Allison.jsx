
import React from "react";

import image from "../../assets/allison.jpg";

export default function Allison() {
  return (
    <div className="music tiger  py-10">
      <div class="container justify-center px-4  flex m-0">
          
        <div class="row align-items-center bg-stone-800 p-2 rounded-xl w-full md:w-[70%]  my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded-xl mb-2 w-full mb-lg-0"
              src={image}
              alt=""
            />
          </div>
          <div class="p-4 md:px-10 col-lg-5 bg-stone-700 text-stone-400 rounded-xl">
            <h1 class="font-weight-light  py-2">Allison</h1>
            <p className="pb-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p> 
           </div>
        </div>
      </div>
    </div>
  );
}