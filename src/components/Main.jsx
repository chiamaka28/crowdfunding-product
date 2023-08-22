import React from "react";

const Main = () => {
  return (
    <div className="pb-12">
      <div className="w-[90%] mx-auto max-w-[650px] bg-white shadow-md my-12 pb-6 rounded-md">
        <div className="flex flex-col md:flex-row items-center md:justify-between md:px-12">
          <p className="flex flex-col text-center my-4 ">
            <span className="text-[25px] font-extrabold">$89,914</span> of
            $100,000 backed
            <span className="w-[20%] h-[1px] bg-black mx-auto mt-3 md:hidden"></span>
          </p>
          <p className="flex flex-col text-center my-4">
            <span className="text-[25px] font-extrabold">$5,007</span> of total
            backers
            <span className="w-[20%] h-[1px] bg-black mx-auto mt-3 md:hidden"></span>
          </p>
          <p className="flex flex-col text-center ">
            <span className="text-[25px] font-extrabold">56</span> days left
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
          <div className="border border-darkGray py-6 px-4 rounded-md">
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
          <div className="border border-darkGray py-6 px-4 rounded-md">
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
  );
};

export default Main;
