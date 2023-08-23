import React, { useState } from "react";
import logo from "../assets/logo.svg";
import hamburger from "../assets/icon-hamburger.svg";
import close from "../assets/icon-close-menu.svg"
import mastercraft from "../assets/logo-mastercraft.svg";
import bookmark from "../assets/icon-bookmark.svg";
import ProjectModal from "./ProjectModal";


const Header = ({handleToggle, nav}) => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal)
    !modal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }
  return (
    <>
    {modal && <ProjectModal handleModal={handleModal}/>}
      <div className="bg-mobileHeader md:bg-desktopHeader h-72 bg-cover ">
        <div  className={`${nav ? "fixed top-0 left-0 bg-overlay w-full h-full z-50 transition-all duration-700 ease-in-out" : "" }`}>
          <nav className="flex items-center justify-between py-5 px-4 w-[90%] mx-auto max-w-[1100px]">
            <img src={logo} alt="" />
            <button onClick={handleToggle} className="md:hidden">
              {nav ? <img src={close} alt="" className="h-5"/> : <img src={hamburger} alt="" />}  
            </button>
            <div className="hidden md:block">
            <ul className="hidden md:flex gap-6 text-white">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href=""> Discover</a>
              </li>
              <li>
                <a href="">Get Started</a>
              </li>
            </ul>
          </div>
          </nav>
          <div className={`${nav ? "bg-white w-[80%] mx-auto rounded-lg  relative" : "hidden"}`}>
            <ul className="flex flex-col text-xl ">
              <li className="border-b px-5 py-3">
                <a href="">About</a>
              </li>
              <li className="border-b px-5 py-3">
                <a href=""> Discover</a>
              </li>
              <li className="px-5 py-3">
                <a href="">Get Started</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto max-w-[650px] bg-white mt-[-50px] rounded-md relative text-center shadow-md pb-6 px-2">
        <div className="flex justify-center items-center">
          <img src={mastercraft} alt="" className=" absolute top-[-20] " />
        </div>
        <h1 className=" text-xl font-bold px-8 mt-12">
          {" "}
          Mastercraft Bamboo Monitor Riser
        </h1>
        <p className="py-2">
          {" "}
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div className="flex justify-center md:justify-between md:px-4 items-center gap-3 py-2">
          <button onClick={handleModal} className="bg-cyan text-white rounded-3xl py-3 px-5 text-[15px] font-semibold">
             Back this project
          </button>
          <div>
            <img className="w-12" src={bookmark} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
