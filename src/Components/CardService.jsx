/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

const CardService = (props) => {
  return (
    <div className="card hover:scale-105 transa flex-grow-0 flex-shrink-0 bg-white rounded-[20px] shadow-xl py-8 px-7 w-[355px] hover:bg-primary2 hover:text-white transition-all duration-300">
      <div className="icon bg-[#F4F4F4] inline-block p-3 rounded-lg">
        {props.children}
      </div>
      <div className="wr flex items-center gap-2 mt-5">
        <div className="garis h-[30px] w-[5px] bg-primary"></div>
        <div className="pro text-[25px] font-bold">{props.service}</div>
      </div>
      <div className="teks text-[16px] text-justify mt-2">
        {props.teks}
      </div>
    </div>
  );
};

export default CardService;
