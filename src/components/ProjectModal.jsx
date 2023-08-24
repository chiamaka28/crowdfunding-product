import React from "react";
import close from "../assets/icon-close-modal.svg";

const ProjectModal = ({ handleModal }) => {
  return (
    <div className="fixed top-0 left-0 bg-overlay w-full h-full z-50 flex justify-center items-center">
      <div className="bg-white w-[90%] h-[80%] overflow-auto overscroll-contain px-3 rounded-lg">
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
        <div>
          <div className="flex ">
            <button className="border border-black w-5 h-5 rounded-full flex justify-center items-center">
              {/* <div className="h-3 w-3 rounded-full bg-cyan"></div> */}
            </button>
            <h4>Pledge with no reward </h4>
          </div>
          <p>
            Choose to support us without a reward if you simply believe in our
            project. As a backer, your will be signed up to receive product
            updates via email.
          </p>
        </div>
        <div>
          <div className="flex ">
            <button className="border border-black w-5 h-5 rounded-full flex justify-center items-center">
              {/* <div className="h-3 w-3 rounded-full bg-cyan"></div> */}
            </button>
            <h4>Bamboo Stand </h4>
            <h3>Pledge $25 or more</h3>
          </div>
          <p>
            You get an ergonomic stand made of natural bamboo. You've helped us
            launch our promotional campaign, and you’ll be added to a special
            Backer member list.
            <p> 101 left</p>
          </p>
        </div>
        <div>
          <div className="flex ">
            <button className="border border-black w-5 h-5 rounded-full flex justify-center items-center">
              {/* <div className="h-3 w-3 rounded-full bg-cyan"></div> */}
            </button>
            <h4>Black Edition Stand </h4>
            <h3> Pledge $75 or more</h3>
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
        <div>
          <div className="flex ">
            <button className="border border-black w-5 h-5 rounded-full flex justify-center items-center">
              {/* <div className="h-3 w-3 rounded-full bg-cyan"></div> */}
            </button>
            <h4>Mahogany Special Edition </h4>
            <h3> Pledge $200 or more</h3>
          </div>
          <p>
              You get two Special Edition Mahogany stands, a Backer T-Shirt, and
              a personal thank you. You’ll be added to our Backer member list.
              Shipping is included.
            </p>
            <p>  0 left</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
