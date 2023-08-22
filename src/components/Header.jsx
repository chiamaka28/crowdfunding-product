import React from "react";
import logo from "../assets/logo.svg";
import hamburger from "../assets/icon-hamburger.svg";
import mastercraft from "../assets/logo-mastercraft.svg";
import bookmark from "../assets/icon-bookmark.svg"

const Header = () => {
  return (
    <>
      <div className="bg-mobileHeader md:bg-desktopHeader h-72 bg-cover ">
        <nav className="flex items-center justify-between py-5 px-4 w-[90%] mx-auto max-w-[1100px]">
          <img src={logo} alt="" />
          <img src={hamburger} alt="" />
        </nav>
      </div>
      <div className="w-[90%] mx-auto max-w-[750px] bg-white mt-[-50px] rounded-md relative text-center shadow-md pb-6 px-2">
        <div className="flex justify-center items-center"><img src={mastercraft} alt="" className=" absolute top-[-20] "/></div>
        <h1 className=" text-xl font-bold px-8 mt-12"> Mastercraft Bamboo Monitor Riser</h1>
        <p className="py-2">
          {" "}
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div className="flex justify-center md:justify-between md:px-4 items-center gap-3 py-2">
            <button className="bg-cyan text-white rounded-3xl py-3 px-5 text-[15px] font-semibold"><a href=""> Back this project</a></button>
            <div>
                <img className="w-12" src={bookmark} alt="" />
            </div>
        </div>
      </div>
    </>
  );
};

export default Header;
