import React from "react";

import Menu from "./Menu.jsx";

export default function Navbar({ fixed }) {
    // const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
        <>
            <nav className=" bg-stone-800 p-2 mt-0 fixed  w-full z-40 top-0 ">
                <div className="container  mx-auto flex flex-wrap items-center">
                    <div className="flex w-full md:w-1/2 justify-center md:justify-start font-extrabold">
                        <a className="no-underline hover:text-cyan hover:no-underline" href="/">
                            <span className="text-4xl title hover:text-cyan-400 pl-2 " id="">
                                <i  className="em  em-grinning"></i> Easy Tiger
                            </span>
                        </a>
                    </div>
                    <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
                        <ul className="list-reset flex justify-between flex-1 text-amber-600  md:flex-none items-center">
                            {/* <li className="mr-3">
                                <a id="nav" className="inline-block text-xl font-semibold hoov    py-2 px-2" href="/">home</a>
                            </li> */}
                            {/* <li className="mr-3">
                                <a id="nav" className="inline-block text-xl font-semibold hoov   py-2 px-2" href="/about">about</a>
                            </li> */}
                            <li className="mr-3">
                                <a id="nav" className="inline-block text-xl font-semibold hoov   py-2 px-4" href="/music">music</a>
                            </li>
                            {/* <li className="mr-6">
                                <a id="nav" className="inline-block text-xl font-semibold  hoov   py-2 px-2" href="/tour">tour</a>
                            </li> */}
                            <li className=" relative py-2 px-4">
                          <Menu />

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
