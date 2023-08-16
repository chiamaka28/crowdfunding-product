import React from "react";

const Main = () => {
  return (
    <div>
      <div className="w-[90%] mx-auto bg-white shadow-md my-8 pb-6 rounded-md">
        <p className="flex flex-col text-center my-4">
          <span className="text-[25px] font-extrabold">$89,914</span> of
          $100,000 backed
          <span className="w-[20%] h-[1px] bg-black mx-auto mt-3"></span>
        </p>
        <p className="flex flex-col text-center my-4">
          <span className="text-[25px] font-extrabold">$5,007</span> of total
          backers
          <span className="w-[20%] h-[1px] bg-black mx-auto mt-3"></span>
        </p>
        <p className="flex flex-col text-center mb-6">
          <span className="text-[25px] font-extrabold">56</span> days left
        </p>
        <div class="mb-5 h-3 rounded-full bg-gray-200 w-[80%] mx-auto ">
          <div class="h-3 rounded-full bg-cyan" style={{ width: "50%" }}></div>
        </div>
      </div>
      <div className="w-[90%] mx-auto bg-white shadow-md rounded-md text-[15px] px-4">
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
        <div className="border border-darkGray ">
          <h4>Bamboo Stand</h4>
          <p className="text-cyan">Pledge $25 or more</p>
          <p className="text-darkGray">
            {" "}
            You get an ergonomic stand made of natural bamboo. You've helped us
            launch our promotional campaign, and you’ll be added to a special
            Backer member list.
          </p>
          <p>101 left</p>
          <button> Select Reward</button>
        </div>
        <div className="border border-darkGray ">
          <h4>Black Edition Stand</h4>
          <p className="text-cyan">Pledge $75 or more</p>
          <p className="text-darkGray">
            {" "}
            You get a Black Special Edition computer stand and a personal thank
            you. You’ll be added to our Backer member list. Shipping is
            included.
          </p>
          <p>64 left</p>
          <button> Select Reward</button>
        </div>
        <div className="border border-darkGray ">
          <h4>Mahogany Special Edition Pledge</h4>
          <p className="text-cyan"> $200 or more</p> 
          <p className="text-darkGray">
            You get two Special
            Edition Mahogany stands, a Backer T-Shirt, and a personal thank you.
            You’ll be added to our Backer member list. Shipping is included.
          </p> 
          <p>0left</p> 
          <button>Out of Stock</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
