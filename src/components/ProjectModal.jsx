import React, { useState } from "react";
import close from "../assets/icon-close-modal.svg";
import NoReward from "./NoReward";
import BambooStand from "./BambooStand";
import BlackEdition from "./BlackEdition";
import Mahongany from "./Mahongany";


const ProjectModal = ({ handleModal,  }) => {
  const [selected, setSelected] = useState(false);

  const handleSelect = () => {
    setSelected(!selected)
  }
  return (
    <div className="fixed top-0 left-0 bg-overlay overflow-y-auto w-full h-full z-50">
      <div className="bg-white w-[90%] min-h-[100%] px-3 rounded-lg mx-auto my-28 py-6">
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
          <NoReward />
          <BambooStand />
          <BlackEdition/>
          <Mahongany/>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;