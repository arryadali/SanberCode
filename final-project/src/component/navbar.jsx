import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section id="Navbar">
        <div className="container">
          <div className="flex w-[90%] m-auto p-1  bg-gradient-to-r from-bg-[#E1E1E1] to-white ">
            <div>
              <img src="/asset/logo.png" alt="" />
            </div>
            <div>
              <ul className="flex font-semibold ml-[10%] gap-5 sm:gap-16 sm:ml-[60%] mt-[6%] ">
                <li className="hover:text-green-400">
                  <Link to={"/"}>Beranda</Link>
                </li>
                <li className="hover:text-green-400">
                  <Link to={"/about"}>About</Link>
                </li>
              </ul>
            </div>
            <div className="ml-auto mt-[0.5%]">
              <button className="rounded-[10px] p-2 text-sm bg-gradient-to-r from-green-400 to-black text-white font-semibold ">Log In</button>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Navbar;
