import React, { useState } from "react";

const BambooStand = ({ count, setCount }) => {
  let items = 101;
  const [selected, setSelected] = useState(false);
  const [itemsLeft, setItemsLeft] = useState(items);

  const handleSelect = () => {
    setSelected(!selected);
  };
  const update = () => {
    setCount(count + 1);
    setItemsLeft(itemsLeft - 1);
  };
  return (
    <div
      className={` ${
        selected ? "border-cyan border-[2px]" : "border-darkGray border-[1px]"
      } border rounded-md`}
    >
      <div className=" px-6 py-3">
        <div className="flex items-center gap-4  py-4">
          <button
            onClick={handleSelect}
            className="border border-black w-5 h-5 rounded-full flex justify-center items-center"
          >
            {selected && <div className="h-3 w-3 rounded-full bg-cyan"></div>}
          </button>
          <div>
            <h4>Bamboo Stand </h4>
            <h3>Pledge $25 or more</h3>
          </div>
        </div>
        <p>
          You get an ergonomic stand made of natural bamboo. You've helped us
          launch our promotional campaign, and you’ll be added to a special
          Backer member list.
          <p className=""> {itemsLeft} left</p>
        </p>
      </div>
      {selected && (
        <div className="border-t border-darkGray py-4">
          <h5 className="text-center">Enter your Pledge</h5>
          <div className="flex justify-center gap-6">
            <input 
            type="text"
            className="border-darkGray border-[1px] outline-none py-2 w-[30%] rounded-3xl text-center"
             />
             <button onClick={update} className="bg-cyan  py-2 px-4 rounded-3xl text-white" >Continue</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BambooStand;
