import React from "react";
import { Link } from "react-router-dom";
import Tugas7 from "../tugas7/tugas7";

const Navbar = () => {
  return (
    <div>
      <div className="flex w-[50%] ml-auto mr-auto py-4">
        <div className="font-bold text-xl">
            Kelas Reactjs
        </div>
        <div className="ml-auto">
          <ul className="flex font-semibold">
            <li className="mr-5">
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/tugas15list"}>Tugas 15</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Tugas7/>
      </div>
    </div>
  );
};

export default Navbar;
