import React, { useState } from 'react'


const BlackEdition = () => {
    const [selected, setSelected] = useState(false);
    const [input , setInput] = useState(0);

    const handleSelect = () => {
     setSelected(!selected)
   }
  return (
    <div className={` ${selected ? "border-cyan border-[2px]" : "border-darkGray border-[1px]"} border rounded-md relative`}>
    <div className='px-6 py-3'>
      <div className="flex items-center gap-4 py-4">
        <button onClick={handleSelect} className="border border-black w-5 h-5 rounded-full flex justify-center items-center">
        { selected && <div className="h-3 w-3 rounded-full bg-cyan"></div> }
        </button>
        <div className='md:flex md:gap-4 md:items-center'>
          <h4>Black Edition Stand </h4>
          <h3 className='text-darkCyan'> Pledge $75 or more</h3>
        </div>
      </div>
      <div>
        <p className='text-darkGray'>
          You get a Black Special Edition computer stand and a personal
          thank you. You’ll be added to our Backer member list. Shipping is
          included.
        </p>
        <p className=" py-2 md:py-0 md:absolute right-10 top-5 text-darkGray"><span className="text-xl font-bold text-black"> 64</span> left</p>
      </div>
    </div>
    {selected && (
        <div className="border-t border-darkGray py-4">
          <h5 className="text-center">Enter your Pledge</h5>
          <div className="flex justify-center gap-6 py-2">
            <input 
            type="number"
            value={input}
            onChange={(e) => (setInput(e.target.value))}
            className="border-darkGray border-[1px] outline-none py-2 w-[30%] max-w-[100px] rounded-3xl text-center"
             />
             <button  className="bg-cyan  py-1 px-4 rounded-3xl text-white" >Continue</button>
          </div>
        </div>
      )}
  </div>
  )
}

export default BlackEdition
