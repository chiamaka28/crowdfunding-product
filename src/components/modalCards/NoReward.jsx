import React, { useState } from "react";

const NoReward = ({increaseCount}) => {
  const [selected, setSelected] = useState(false);
 

  const handleSelect = () => {
    setSelected(!selected);
  };

 
  return (
    <div
      className={` ${
        selected ? "border-cyan border-[2px]" : "border-darkGray border-[1px]"
      } border rounded-md px-6 py-3`}
    >
      <div className="flex items-center gap-4 py-4">
        <button
          onClick={handleSelect}
          className="  border border-black w-5 h-5 rounded-full flex justify-center items-center"
        >
          {selected && <div className="h-3 w-3 rounded-full bg-cyan"></div>}
        </button>
        <h4>Pledge with no reward </h4>
      </div>
      <p>
        Choose to support us without a reward if you simply believe in our
        project. As a backer, your will be signed up to receive product updates
        via email.
        <span className="w-[100%] h-[20px] bg-black  "></span>
      </p>
      {selected ? <div className="flex justify-center my-2"><button onClick={increaseCount} className="bg-cyan py-2 px-4 rounded-3xl text-white" >Continue</button></div> : ""}
    </div>
  );
};

export default NoReward;
