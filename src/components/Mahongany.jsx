import React from 'react'

const Mahongany = () => {
  return (
    <div className="border border-darkGray rounded-md px-6 py-3">
    <div className="flex items-center gap-4 py-4">
      <button className="border border-black w-5 h-5 rounded-full flex justify-center items-center">
        {/* <div className="h-3 w-3 rounded-full bg-cyan"></div> */}
      </button>
      <div>
        <h4>Mahogany Special Edition </h4>
        <h3> Pledge $200 or more</h3>
      </div>
    </div>
    <p>
        You get two Special Edition Mahogany stands, a Backer T-Shirt, and
        a personal thank you. You’ll be added to our Backer member list.
        Shipping is included.
      </p>
      <p>  0 left</p>
  </div>
  )
}

export default Mahongany
