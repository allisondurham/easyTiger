import React from "react";
import image1 from "../assets/logo-rubies.png";
import image2 from "../assets/shakori-logo.png";
import bg from "../assets/stage.jpg";

export default function Tour () {
    return (
    <div className="home mt-0   relative">
    <img className="stripe" src={bg} alt="" ></img>

    <div class="container  ">
          <div class="  my-4 p-2 flex text-stone-400 bg-stone-800/80 p-4 z-0 rounded-2xl">
          <a href="https://www.shakorihillsgrassroots.org/"
            className="justify-start self-center"
            >
        <img
            class="rounded-xl p-2 contrast-125"
            src={image1}
            width="180"
            height="auto"            
            alt=""
            />
            </a>
            <div className="self-center">
            <h1 class="py-2 text-left font-weight-light pl-6">April 23, 2022 -  </h1>
             <p class=" pt-2 pl-6 text-left font-weight-light">
               Rubies on Five Points
             </p>
             <p class=" pt-2 pl-6 text-left font-weight-light">
             Durham, NC
             </p>
             
             </div>
           </div>

          <div class=" my-4 p-2 mb-20 flex text-stone-400 bg-stone-800/80 p-4 z-0 rounded-2xl">
        <a href="https://www.shakorihillsgrassroots.org/"
            className="justify-start self-center"
            >

        <img
            class="rounded-xl  p-2 contrast-125"
            src={image2}
            width="340"
            height="auto"            
            alt=""
            />
            </a>
            <div className="self-center">
            <h1 class="py-2 text-left font-weight-light pl-6">May 5-8, 2022 -  </h1>
             <p class=" pt-2 pl-6 pr-2 text-left font-weight-light">
               Shakori Hills Festival of Music & Dance
             </p>
             <p class=" pt-2 pb-2 pl-6 text-left font-weight-light">
               Silk Hope, NC
             </p>
             </div>
           </div>
           
        </div>
        
    </div>      
 
);
  }




//     return (
//         <div className="simple tiger ">
//             <div className="container w-full mx-auto mt-16">
//                 <div className=" p-20 flex flex-wrap items-center justify-center">

//                 <img className="" src={image} alt=""/>
// <p className="p-6">coming to a backyard near you</p>


//                 </div>
//             </div>
//         </div>
//     );
// }