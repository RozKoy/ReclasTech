/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import CardRole from "./CardRole";
import UI from "./Role/UI";
import PM from "./Role/PM";
import FE from "./Role/FE";
import BE from "./Role/BE";
import ML from "./Role/ML";
import DO from "./Role/DO";
import DG from "./Role/DG";

const PM1 = () => (
  <div className=" w-full">
    <PM />
  </div>
);

const UI2 = () => (
  <div className="w-full">
    <UI />
  </div>
);

const FE2 = () => (
  <div className=" w-full">
    <FE />
  </div>
);
const BE2 = () => (
  <div className=" w-full">
    <BE />
  </div>
);

const ML2 = () => (
  <div className=" w-full flex justify-center">
    <ML />
  </div>
);
const DV2 = () => (
  <div className=" w-full flex justify-center">
    <DO />
  </div>
);
const DM2 = () => (
  <div className=" w-full flex justify-center">
    <DG />
  </div>
);

const TabsRole = ({ setActiveMenu }) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
    setActiveMenu(tabNumber);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 1:
        return <PM1 />;
      case 2:
        return <UI2 />;
      case 3:
        return <FE2 />;
      case 4:
        return <BE2 />;
      case 5:
        return <ML2 />;
      case 6:
        return <DV2 />;
      case 7:
        return <DM2 />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="flex  gap-3 w-full md:w-[60%] flex-wrap justify-center overflow-x-auto wrapRole">
        <button
          className={`px-4 py-2 text-center  md:text-[16px] md:w-[170px] text-[12px] text-white rounded-[20px] ${
            activeTab === 1 ? "bg-primary text-white" : "bg-primary2"
          }`}
          onClick={() => handleTabClick(1)}
        >
          Project Manager
        </button>
        <button
          className={`px-4 text-center md:text-[16px] md:w-[170px] text-[12px] text-white rounded-[20px] py-2 ${
            activeTab === 2 ? "bg-primary text-white" : "bg-primary2"
          }`}
          onClick={() => handleTabClick(2)}
        >
          UI/UX
        </button>
        <button
          className={`px-4 text-center md:text-[16px] md:w-[170px] text-[12px] text-white rounded-[20px] py-2 ${
            activeTab === 3 ? "bg-primary text-white" : "bg-primary2"
          }`}
          onClick={() => handleTabClick(3)}
        >
          Front End
        </button>
        <button
          className={`px-4 text-center md:text-[16px] md:w-[170px] text-[12px] text-white rounded-[20px] py-2 ${
            activeTab === 4 ? "bg-primary text-white" : "bg-primary2"
          }`}
          onClick={() => handleTabClick(4)}
        >
          Back End
        </button>
        <button
          className={`px-4 text-center md:text-[16px] md:w-[170px] text-[12px] text-white rounded-[20px] py-2 ${
            activeTab === 5 ? "bg-primary text-white" : "bg-primary2"
          }`}
          onClick={() => handleTabClick(5)}
        >
          Machine Learning
        </button>
        <button
          className={`px-4 text-center md:text-[16px] md:w-[170px] text-[12px] text-white rounded-[20px] py-2 ${
            activeTab === 6 ? "bg-primary text-white" : "bg-primary2"
          }`}
          onClick={() => handleTabClick(6)}
        >
          DevOps
        </button>
        <button
          className={`px-4 text-center md:text-[16px] md:w-[170px] text-[12px] text-white rounded-[20px] py-2 ${
            activeTab === 7 ? "bg-primary text-white" : "bg-primary2"
          }`}
          onClick={() => handleTabClick(7)}
        >
          Digital Marketing
        </button>
      </div>
      <div className="mt-8 w-full">{renderTabContent()}</div>
    </div>
  );
};

export default TabsRole;
