import React, { useState } from 'react'


const BlackEdition = () => {
    const [selected, setSelected] = useState(false);

    const handleSelect = () => {
     setSelected(!selected)
   }
  return (
    <div className={` ${selected ? "border-cyan border-[2px]" : "border-darkGrey border-[1px]"} border border-darkGray rounded-md px-6 py-3`}>
    <div className="flex items-center gap-4 py-4">
      <button onClick={handleSelect} className="border border-black w-5 h-5 rounded-full flex justify-center items-center">
      { selected && <div className="h-3 w-3 rounded-full bg-cyan"></div> }
      </button>
      <div>
        <h4>Black Edition Stand </h4>
        <h3> Pledge $75 or more</h3>
      </div>
    </div>
    <div>
      <p>
        You get a Black Special Edition computer stand and a personal
        thank you. You’ll be added to our Backer member list. Shipping is
        included.
      </p>
      <p> 64 left</p>
    </div>
  </div>
  )
}

export default BlackEdition
