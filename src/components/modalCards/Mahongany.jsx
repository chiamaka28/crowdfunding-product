import React from 'react'

const Mahongany = () => {
  let items = 0;
  return (
    <div className={`border border-darkGray rounded-md px-6 py-3 ${items === 0 ? "opacity-40" : "" } relative`}>
    <div className="flex items-center gap-4 py-4">
      <button className="border border-black w-5 h-5 rounded-full flex justify-center items-center">
        {/* <div className="h-3 w-3 rounded-full bg-cyan"></div> */}
      </button>
      <div className='md:flex md:gap-4 md:items-center'>
        <h4>Mahogany Special Edition </h4>
        <h3 className='text-darkCyan'> Pledge $200 or more</h3>
      </div>
    </div>
    <p>
        You get two Special Edition Mahogany stands, a Backer T-Shirt, and
        a personal thank you. You’ll be added to our Backer member list.
        Shipping is included.
      </p>
      <p className="py-2 md:py-0 md:absolute right-10 top-5 text-darkGray"> <span className="text-xl font-bold text-black">{items}</span>left</p>
  </div>
  )
}

export default Mahongany
