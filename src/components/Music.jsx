
import React from "react";

export default function Music() {
  return (
    <div className="music tiger  py-10">
      <div class="container justify-center px-4 flex m-0">
        <div class="row align-items-center w-full md:w-[70%] lg:w-[50%] my-5">
          {/* <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="ml-4 md:ml-10 col-lg-5">
            <h1 class="font-weight-light py-2">Music</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p> */}
          {/* </div> */}

          <iframe title="Easy Tiger" className="rounded-xl" src="https://open.spotify.com/embed/artist/0QS8HiZaDpyGLTZUyHZ9SQ" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>

        </div>
      </div>
    </div>
  );
}