import logo from "../assets/LogoPrivWhite.jpg";
import { RiSearchLine } from "react-icons/ri";
const Header = () => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between gap-5">
      <div className="flex flex-wrap gap-4 ">
        <img src={logo} alt="logo" className="w-[10%] lg:w-[6%] md:w-[5%]" />
        <h1 className="text-2xl md:text-3xl font-bold">Bienvenida, <span className="text-fuchsia-900">Maria Antonieta</span></h1>
      </div>
      <form className="hidden sm:block w-full md:w-auto">
        <div className="relative">
          <RiSearchLine className="absolute top-1/2 -translate-y-1/2 left-2" />
          <input type="text" className="bg-white outline-none py-2 pl-8 pr-4 rounded-xl w-full md:w-auto " 
          placeholder="Search for contents"/>
        </div>
      </form>
    </header>
  );
};
export default Header;
