import React, { useState } from "react";
import ProjectModal from "./ProjectModal";
import mastercraft from "../assets/logo-mastercraft.svg";
import bookmark from "../assets/icon-bookmark.svg";


const Main = ({}) => {
  let backed = 89914;
  let backers = 5007;
  let days = 56;
  const [modal, setModal] = useState(false);
  const [count, setCount] = useState(backers)


  const handleModal = () => {
    setModal(!modal)
    !modal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }
 
  const increaseCount = () => {
    setCount(count + 1);
    console.log(count);
  }
  return (
    <>
     {modal && <ProjectModal handleModal={handleModal}  increaseCount={increaseCount} count={count} setCount={setCount}/>}
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
    <div className="pb-12">
      <div className="w-[90%] mx-auto max-w-[650px] bg-white shadow-md my-12 pb-6 rounded-md">
        <div className="flex flex-col md:flex-row items-center md:gap-20 md:px-12">
          <p className="flex flex-col text-center my-4 ">
            <span className="text-[25px] font-extrabold">$</span> of
            $100,000 backed
            <span className="w-[20%] h-[1px] bg-black mx-auto mt-3 md:hidden"></span>
          </p>
          <p  className="flex flex-col text-center my-4 md:border-l md:pl-6">
            <span className="text-[25px] font-extrabold">{count}</span> of total
            backers
            <span className="w-[20%] h-[1px] bg-black mx-auto mt-3 md:hidden"></span>
          </p>
          <p className="flex flex-col text-center md:border-l md:pl-6">
            <span className="text-[25px] font-extrabold"></span> days left
          </p>
        </div>
        <div class="mb-5 h-3 rounded-full bg-gray-200 w-[80%] md:w-[90%] mx-auto ">
          <div class="h-3 rounded-full bg-cyan" style={{ width: "50%" }}></div>
        </div>
      </div>
      <div className="w-[90%] mx-auto max-w-[650px] bg-white shadow-md rounded-md text-[15px] px-4 pb-9">
        <h3 className="font-bold text-[17px]">About this project</h3>
        <div className="text-darkGray">
          <p>
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand.
          </p>
          <p className="pt-4">
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>
        </div>
        <div className="flex flex-col gap-y-5 mt-6">
          <div className="border border-darkGray py-6 px-4 rounded-md">
            <h4 className="font-bold">Bamboo Stand</h4>
            <p className="text-cyan">Pledge $25 or more</p>
            <p className="text-darkGray py-5 ">
              {" "}
              You get an ergonomic stand made of natural bamboo. You've helped us
              launch our promotional campaign, and you’ll be added to a special
              Backer member list.
            </p>
            <p><span className="text-[26px] font-extrabold">101</span> left</p>
            <button className="bg-cyan py-2 px-4 text-white rounded-3xl my-2"> Select Reward</button>
          </div>
          <div className="border border-darkGray py-6 px-4 rounded-md ">
            <h4 className="font-bold">Black Edition Stand</h4>
            <p className="text-cyan">Pledge $75 or more</p>
            <p className="text-darkGray py-5">
              {" "}
              You get a Black Special Edition computer stand and a personal thank
              you. You’ll be added to our Backer member list. Shipping is
              included.
            </p>
            <p><span className="text-[26px] font-extrabold">64</span> left</p>
            <button className="bg-cyan py-2 px-4  text-white rounded-3xl my-2"> Select Reward</button>
          </div>
          <div className="border border-darkGray py-6 px-4 rounded-md opacity-40">
            <h4 className="font-bold">Mahogany Special Edition Pledge</h4>
            <p className="text-cyan"> $200 or more</p>
            <p className="text-darkGray py-5">
              You get two Special
              Edition Mahogany stands, a Backer T-Shirt, and a personal thank you.
              You’ll be added to our Backer member list. Shipping is included.
            </p>
            <p><span className="text-[26px] font-extrabold">0</span>left</p>
            <button className="bg-cyan py-2 px-4  text-white rounded-3xl my-2">Out of Stock</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Main;
