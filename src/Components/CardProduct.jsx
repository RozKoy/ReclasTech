/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
const CardProduct = (props) => {
  return (
    <div className="card flex md:flex-nowrap flex-wrap gap-3 bg-primary px-6 py-5 text-white rounded-2xl">
      <div className="img flex justify-center w-full flex-shrink-0 flex-grow-0 md:w-[180px] h-[100px]">
        <img className="object-cover h-full" src={props.img} alt="" />
      </div>
      <div className="teks">
        {props.teks}
      </div>
    </div>
  );
};

export default CardProduct;
