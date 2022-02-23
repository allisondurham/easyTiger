import React from "react";
import image from "../assets/easytiger1.jpg";

function About() {
  return (
    <div className="about tiger px-4 mt-24 md:mt-16 py-10">
      <div class="container bg-stone-800/80 rounded-xl px-4">
        <div class="row align-items-center  my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={image}
              alt=""
            />
          </div>
          <div class="p-4 md:ml-10 col-lg-5 text-stone-400 ">
            <h1 class="py-2 font-weight-light">About</h1>
            <p>
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

export default About;