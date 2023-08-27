import React, { useState } from 'react'


const BambooStand = () => {
   const [selected, setSelected] = useState(false);

   const handleSelect = () => {
    setSelected(!selected)
  }
  return (
    <div className={` ${selected ? "border-cyan border-[2px]" : "border-darkGrey border-[1px]"} border border-darkGray rounded-md px-6 py-3`}>
    <div className="flex items-center gap-4  py-4">
      <button  onClick={handleSelect} className="border border-black w-5 h-5 rounded-full flex justify-center items-center">
      { selected && <div className="h-3 w-3 rounded-full bg-cyan"></div> }
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
      <p className=""> 101 left</p>
    </p>
  </div>
  )
}

export default BambooStand
