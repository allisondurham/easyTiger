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

