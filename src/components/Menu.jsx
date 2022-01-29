import React, { useState } from 'react'

export default function Menu() {
    const[isOpen, setIsOpen] = useState(false);
    return(
        <>
<div className='slider z-0'>

            {!isOpen ?
            (
                <button className=" z-10  block text-xl more  cursor-pointer " onClick={() => setIsOpen(!isOpen)}>
                    <svg
                        onClick={() => setIsOpen(!isOpen)}
                        fill="#4ade80"
                        viewBox="0 0 100 80"
                        width="26"
                        className="hover:fill-amber-600"
                        >
                        <rect width="100" height="10"></rect>
                        <rect y="30" width="100" height="10"></rect>
                        <rect y="60" width="100" height="10"></rect>
                    </svg>
                </button>
            ) : (
                <button className="text-xl  text-cyan-400   z-50"
                onClick={() => setIsOpen(!isOpen)}
                >
<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-double-right text-amber-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
  <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>
                </button>
                )
            }
            <div className={`menu-bar top-3 md:top-1 mt-24 md:mt-16 bottom-[2.92rem]  text-stone-800 right-0 shadow-xl z-10  fixed overflow-scroll bg-gradient-to-br from-stone-400 to-green-400/95 w-[60vw] md:w-[35vw] p-3
                ${isOpen ? 'translate-x-0':'translate-x-full'}
                ease-in-out  z-10 duration-300`}>
                <h2 className="text-2xl  pt-2 pl-5 font-extrabold">explore</h2>

                <div className="col-span-1 ">
                    <div className="pl-10 text-xl pt-4 2xl:text-2xl">

                        {/* <p id="side" className="hover:text-amber-600 mb-2 md:mb-4">
                            <a href="/" className="">home</a>
                        </p> */}
                        <p id="side" className="hover:text-amber-600 mb-2 md:mb-4">
                            <a href="/About" className="">about</a>
                        </p>
                        <p id="side" className="hover:text-amber-600 mb-2 md:mb-4">
                            <a href="/Music" className="">music</a>
                        </p>
                        <p id="side" className="hover:text-amber-600 mb-2 md:mb-4">
                            <a href="/Tour" className="">tour</a>
                        </p>
                        <p id="side" className="hover:text-amber-600  mb-2 md:mb-4">
                            <a href="/Merch" className="">merch - lol</a>
                        </p>
                        <p id="side" className="hover:text-amber-600   mb-2 md:mb-4">
                            <a href="/Contact" className="">contact</a>
                        </p>

                        {/* <p id="side" className="hover:text-amber-600 mb-2 md:mb-4 ">
                            <a href="/Calculator" className="">link</a>
                        </p> */}
                        {/* <p id="side" className="hover:text-amber-600 mb-2 md:mb-4">
                            <a href="/Oldest" className="">link</a>
                        </p> */}
                    </div>
                </div>
                <h2 className="text-2xl  pt-2 pl-5 font-extrabold">members</h2>

                <div className="col-span-1 ">
                    <div className="pl-10 text-xl pt-4 2xl:text-2xl">

                        {/* <p id="side" className="hover:text-amber-600 mb-2 md:mb-4">
                            <a href="/" className="">home</a>
                        </p> */}
                        <p id="side" className="hover:text-amber-600 mb-2 md:mb-4">
                            <a href="/Tour" className="">elaine</a>
                        </p>
                        <p id="side" className="hover:text-amber-600 mb-2 md:mb-4">
                            <a href="/Tour" className="">michael</a>
                        </p>
                        <p id="side" className="hover:text-amber-600 mb-2 md:mb-4">
                            <a href="/Tour" className="">allison</a>
                        </p>
                        <p id="side" className="hover:text-amber-600  mb-2 md:mb-4">
                            <a href="/Tour" className="">heather</a>
                        </p>
                        <p id="side" className="hover:text-amber-600   mb-6 md:mb-10">
                            <a href="/Tour" className="">anthony</a>
                        </p>

                        {/* <p id="side" className="hover:text-amber-600 mb-4 ">
                            <a href="/Calculator" className="">link</a>
                        </p> */}
                        {/* <p id="side" className="hover:text-amber-600  mb-4">
                            <a href="/Oldest" className="">link</a>
                        </p> */}
                    </div>
                </div>

            </div>
                    </div>

        </>
    )
}