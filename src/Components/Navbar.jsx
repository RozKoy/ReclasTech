import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [burger, setBurger] = useState(false);

  const handleBurger = () => {
    setBurger(!burger);
  };

  const handleScroll = () => {
    const isScrolled = window.scrollY > 0;
    setScrolled(isScrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
    <div
      className={`fixed hidden md:block w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled ? 'bg-primary' : ''
      }`}
    >
      <div className="wrap py-4 m-auto container flex justify-between items-center">
        <div className="logo">
          <img src="Images/logo1.png" alt="" />
        </div>
        <div className="nav flex gap-7 text-[17px] text-white">
          <a href="#Home" className="font-bold">
            Home
          </a>
          <a href="#about">About Us</a>
          <a href="#service">Service</a>
          <a href="#testi">Testimoni</a>
          <a href="#contact">Contact Us</a>
        </div>
      </div>
    </div>
    {/* responsive */}
    <div
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out bg-primary block md:hidden`}
    >
      <div className="wrap py-2 px-2 m-auto container flex justify-between items-center">
        <div className="nav flex items-end flex-col gap-1 text-[17px]  w-full text-white">
          <div className="wrap-head flex  w-full items-center justify-between">
            <div className="logo">
              <img src="Images/logo1.png" alt="" />
            </div>
            <div className="res bg-primary2 rounded-md w-[50px] h-[50px] flex justify-center items-center text-[40px] font-bold cursor-pointer" onClick={handleBurger}>
            {burger ? "x" : "="}
            </div>
          </div>

          <div className={`wrap ${burger ? "flex opacity-100" : "hidden opacity-0 "}  bg-primary w-full items-center flex-col gap-5 transition-all duration-500`}>
            <a href="#Home" className="font-bold">
              Home
            </a>
            <a className="hover:font-bold transition-all duration-300" href="#about">About Us</a>
            <a  className="hover:font-bold transition-all duration-300" href="#service">Service</a>
            <a  className="hover:font-bold transition-all duration-300" href="#testi">Testimoni</a>
            <a  className="hover:font-bold transition-all duration-300" href="#contact">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
