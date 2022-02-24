import React from "react";
import bg from "../assets/stage.jpg";
import image from "../assets/elaine.jpg";

export default function Contact() {
  return (

      <div className="home mt-0   relative">
      <img className="stripe" src={bg} alt="" ></img>
  
      <div class="container  bg-stone-800/80 p-4 z-0 rounded-2xl ">
          <img
              class="rounded-xl  sepia contrast-125"
                  src={image}
  
                  alt=""
              />
          {/* <p className="text-stone-400  py-4">
              Easy Tiger is our band, we play music.  people like us. 
          </p> */}
            <div class="  p-4  text-stone-400 ">
              <h1 class="py-2 text-left font-weight-light">Contact - </h1>
               <p class=" pt-2 text-left font-weight-light">
                The best way to get ahold of us is to come to our shows and talk to us there. 
                The second best way is to email Elaine at  &nbsp;
                <a href="mailto:r.elaine.atwell@gmail.com " className="truffle mail   mr-20 lg:mr-6"> r.elaine.atwell@gmail.com  </a>
               </p>
             </div>
      </div>      
     </div>  
  );
    }






//     <div className="contact mt-24 md:mt-16 py-10">
//       <div class="container">
//         <div class="row align-items-center my-5">
//           <div class="col-lg-7">
//             <img
//               class=" rounded mb-4 mb-lg-0"
//               src="http://placehold.it/900x400"
//               alt=""
//             />
//           </div>
//           <div class="ml-4 md:ml-10 col-lg-5">
//             <h1 class="font-weight-light py-2">Contact</h1>
//             <p>
//               Lorem Ipsum is simply dummy text of the printing and typesetting
//               industry. Lorem Ipsum has been the industry's standard dummy text
//               ever since the 1500s, when an unknown printer took a galley of
//               type and scrambled it to make a type specimen book.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

