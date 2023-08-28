import React from 'react'
import check from "../assets/icon-check.svg"

const SuccessModal = ({handleSuccessModal}) => {
  return (
    <div className="fixed top-0 left-0 bg-overlay overflow-y-auto w-full h-full z-50 flex justify-center items-center">
      <div className='bg-white w-[90%] max-w-[350px] py-4 rounded-lg px-3'>
        <div className="flex justify-center py-4"><img src={check} alt="" /></div>
       <h5 className='text-center font-semibold text-[20px]'>Thanks for your support!</h5>
       <p className='text-center text-darkGray py-2'>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
  an email once our campaign is completed.</p>
    <div className='flex justify-center items-center'><button onClick={handleSuccessModal} className="bg-cyan py-2 px-6 text-white rounded-3xl my-2">Got it!</button></div>
      </div>
    </div>
  )
}

export default SuccessModal
