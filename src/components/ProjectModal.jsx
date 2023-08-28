import React, { useState } from "react";
import close from "../assets/icon-close-modal.svg";
import NoReward from "./modalCards/NoReward";
import BambooStand from "./modalCards/BambooStand";
import BlackEdition from "./modalCards/BlackEdition";
import Mahongany from "./modalCards/Mahongany";

const ProjectModal = ({
  modal,
  setModal,
  handleModal,
  increaseCount,
  setCount,
  count,
  setAmount,
  amount,
  successModal,
  setSuccessModal,
}) => {
  return (
    <div className="fixed top-0 left-0 bg-overlay overflow-y-auto w-full h-full z-50">
      <div className="bg-white w-[90%] max-w-[650px] min-h-[100%] px-3 rounded-lg mx-auto my-28 py-6">
        <div className="flex justify-between items-center">
          <h3>Back this project</h3>
          <button onClick={handleModal}>
            <img src={close} alt="" />
          </button>
        </div>
        <p className="text-[15px]">
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
        <div className="flex flex-col gap-y-6">
          <NoReward
            increaseCount={increaseCount}
            successModal={successModal}
            setSuccessModal={setSuccessModal}
          />
          <BambooStand
            modal = {modal}
            setModal = {setModal}
            setCount={setCount}
            count={count}
            amount={amount}
            setAmount={setAmount}
            successModal={successModal}
            setSuccessModal={setSuccessModal}
          />
          <BlackEdition />
          <Mahongany />
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
