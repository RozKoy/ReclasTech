/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
const CardProduct = (props) => {
  return (
    <div className="card flex md:flex-nowrap flex-wrap gap-3 bg-white shadow-md px-6 py-5 text-primary rounded-lg">
      <div className="img flex justify-center w-full flex-shrink-0 flex-grow-0 md:w-[200px] overflow-hidden rounded-md h-[110px]">
        <img className="object-cover h-full" src={props.img} alt="" />
      </div>
      <div className="teks text-black">
        <div className="font-bold text-primary text-[18px]">
        {props.title}
        </div>
        {props.teks}
      </div>
    </div>
  );
};

export default CardProduct;
