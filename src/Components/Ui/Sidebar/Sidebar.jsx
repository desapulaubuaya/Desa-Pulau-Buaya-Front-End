import React from "react";
import { Link } from "react-router-dom";
import {
  AiFillHome,
  AiFillInfoCircle,
  AiOutlineHistory,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { GiVillage } from "react-icons/gi";

const Sidebar = ({ show, toggle }) => {
  return (
    <div
      className={`-translate-x-full absolute lg:flex-col bg-slate-100 h-screen gap-32 items-center ${
        show && "lg:translate-x-0 lg:relative"
      }  transition-all`}
    >
      <div className="w-80 py-[21px] border-b-2 border-slate-200 px-6 flex justify-between items-center border-r-2">
        <h2 className="text-blue-500 font-inter font-bold text-3xl text-center ">
          Main Menu
        </h2>
      </div>
      <div>
        <ul className="flex flex-col cursor-pointer">
          <Link to={"/"}>
            <li className="text-blue-500 font-inter font-semibold text-lg flex items-center justify-start px-10 py-3 gap-3 border-b-2 border-slate-300 hover:bg-slate-200 active:bg-slate-300">
              <AiFillHome />
              <span>Home</span>
            </li>
          </Link>
          <Link to={"/about"}>
            <li className="text-blue-500 font-inter font-semibold text-lg flex items-center justify-start px-10 py-3 gap-3 border-b-2 border-slate-300 hover:bg-slate-200 active:bg-slate-300">
              <AiFillInfoCircle />
              <span>Tentang</span>
            </li>
          </Link>
          <Link to={"/history"}>
            <li className="text-blue-500 font-inter font-semibold text-lg flex items-center justify-start px-10 py-3 gap-3 border-b-2 border-slate-300 hover:bg-slate-200 active:bg-slate-300">
              <AiOutlineHistory />
              <span>Sejarah</span>
            </li>
          </Link>
          <Link to={"/head-info"}>
            <li className="text-blue-500 font-inter font-semibold text-lg flex items-center justify-start px-10 py-3 gap-3 border-b-2 border-slate-300 hover:bg-slate-200 active:bg-slate-300">
              <GiVillage />
              <span>Info Kepala Desa</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;