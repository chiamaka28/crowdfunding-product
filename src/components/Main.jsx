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
      <div className="w-[90%] mx-auto">
        <h3>About this project</h3>
        <p>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </p>
        <p>
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </p>
      </div>
    </div>
  );
};

export default Main;
