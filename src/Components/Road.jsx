/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

const Road = () => {
  const [showText, setShowText] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [showText3, setShowText3] = useState(false);
  const [showText4, setShowText4] = useState(false);

  const handleButton1 = () => {
    setShowText(!showText);
  };
  const handleButton2 = () => {
    setShowText2(!showText2);
  };
  const handleButton3 = () => {
    setShowText3(!showText3);
  };
  const handleButton4 = () => {
    setShowText4(!showText4);
  };

  return (
    <div className="m-auto container hidden md:block">
      <div className="wrap pt-[120px] justify-center flex items-center">
      <div className="bulet rounded-full mb-[140px] bg-primary -mr-[16px] w-[25px] h-[25px]"> </div>
        <div className="road1 border-8 border-primary flex justify-center items-center flex-col relative">
         
          <div
            className={`teks text-[14px] text-justify w-[150px] mb-[15px] transition-opacity duration-500 ${
              showText ? "opacity-100" : "opacity-0"
            }`}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </div>
          <div
            className="kotak w-[140px] flex-shrink-0 h-[140px] bg-primary2 text-[35px] font-bold cursor-pointer flex items-center justify-center text-white rounded-full border-[3px] border-primary mb-[300px] hover:bg-primary hover:border-primary2 transition-all duration-300"
            onClick={handleButton1}
          >
            1
          </div>
        </div>
        <div className="road2 border-8 border-primary flex justify-center items-center  flex-col">
          
          <div
            className="kotak w-[140px] flex-shrink-0 h-[140px] bg-primary2 text-[35px] font-bold cursor-pointer flex items-center justify-center text-white rounded-full border-[3px] border-primary mt-[300px] hover:bg-primary hover:border-primary2 transition-all duration-300"
            onClick={handleButton2}
          >
            2
          </div>
          <div
            className={`teks text-[14px] text-justify w-[150px] mt-[15px] transition-opacity duration-500 ${
              showText2 ? "opacity-100" : "opacity-0"
            }`}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </div>
        </div>
        <div className="road3 border-8 border-primary flex justify-center items-center flex-col -ml-[8px]">
          <div
            className={`teks w-[150px] text-[14px] text-justify mb-[15px] transition-opacity duration-500 ${
              showText3 ? "opacity-100" : "opacity-0"
            }`}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </div>
          <div
            className="kotak w-[140px] flex-shrink-0 h-[140px] bg-primary2 text-[35px] font-bold cursor-pointer flex items-center justify-center text-white rounded-full border-[3px] border-primary mb-[300px] hover:bg-primary hover:border-primary2 transition-all duration-300"
            onClick={handleButton3}
          >
            3
          </div>
        </div>
        <div className="road4 border-8 border-primary flex justify-center items-center flex-col">
          
          <div
            className="kotak w-[140px] flex-shrink-0 h-[140px] bg-primary2 text-[35px] font-bold cursor-pointer flex items-center justify-center text-white rounded-full border-[3px] border-primary mt-[300px] hover:bg-primary hover:border-primary2 transition-all duration-300"
            onClick={handleButton4}
          >
            4
          </div>
          <div
            className={`teks text-[14px] text-justify mt-[15px] w-[150px] transition-opacity duration-500 ${
              showText4 ? "opacity-100" : "opacity-0"
            }`}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </div>
        </div>
        <div className="bulet rounded-full mb-[140px] bg-primary -ml-[16px] w-[25px] h-[25px]"> </div>
      </div>
    </div>
  );
};

export default Road;
