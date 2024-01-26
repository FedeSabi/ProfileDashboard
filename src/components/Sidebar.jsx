import { useState } from "react";
import chica1 from "../assets/chica1.jpg";

//icons
import {
  RiHome3Line,
  RiFileCopyLine,
  RiMoneyDollarCircleLine,
  RiPieChart2Line,
  RiMenuLine,
  RiCloseFill,
} from "react-icons/ri";
const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div
        className={`bg-fuchsia-900 h-full fixed lg:static w-[80%] md:w-[40%] lg:w-full  transition-all duration-300 -left-full ${
          showMenu ? "left-0" : "-left-full"
        }`}
      >
        {/*Profile */}
        <div className="flex flex-col items-center justify-center p-8 gap-2 h-[30vh]">
          <img
            src={chica1}
            alt="foto"
            className="w-20 h-20 object-cover rounded-full ring-2 ring-red-400"
          />
          <h1 className="text-lg text-white font-bold text-center">
            Maria Antonieta
          </h1>
          <p className="bg-red-400 py-1 px-3 rounded-full text-white">Dancer</p>
        </div>
        {/*Navbar */}
        <div className="bg-red-400 p-8 rounded-tr-[80px] h-[70vh] mt-6 overflow-y-scroll flex flex-col justify-between gap-8">
          <nav className="flex flex-col gap-8">
            <a
              href="#"
              className="flex items-center gap-4 text-white  py-2 px-4 rounded-xl hover:bg-fuchsia-500/50 transition-colors"
            >
              <RiHome3Line />
              Home
            </a>
            <a
              href="#"
              className="flex items-center gap-4 text-white  py-2 px-4 rounded-xl hover:bg-fuchsia-500/50 transition-colors"
            >
              <RiFileCopyLine />
              Projects
            </a>
            <a
              href="#"
              className="flex items-center gap-4 text-white  py-2 px-4 rounded-xl hover:bg-fuchsia-500/50 transition-colors"
            >
              <RiMoneyDollarCircleLine />
              Invoces
            </a>
            <a
              href="#"
              className="flex items-center gap-4 text-white  py-2 px-4 rounded-xl hover:bg-fuchsia-500/50 transition-colors"
            >
              <RiPieChart2Line />
              Reports
            </a>
          </nav>
          <div className="bg-fuchsia-800/50 text-white p-4 rounded-xl ">
            <p className="text-fuchsia-200">Having Troubles?</p>
            <a href="#"> Contact Us</a>
          </div>
        </div>
      </div>
      {/*button mobile */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="lg:hidden fixed right-4 bottom-4 text-2xl bg-red-300 p-2.5 rounded-full text-white z-50"
      >
        {showMenu ? <RiCloseFill /> : <RiMenuLine />}
      </button>
    </>
  );
};
export default Sidebar;
