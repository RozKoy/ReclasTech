/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
const CardProduct = (props) => {
  return (
    <div className="flex flex-wrap gap-3 px-6 py-5 bg-white rounded-lg shadow-md card md:flex-nowrap text-primary">
      <div className="img flex justify-center w-full flex-shrink-0 flex-grow-0 md:w-[200px] overflow-hidden rounded-md h-[110px]">
        <img
          className="object-cover h-full"
          src={props.img}
          alt="Product Reclas Tech"
        />
      </div>
      <div className="text-black teks">
        <div className="font-bold text-primary text-[18px]">{props.title}</div>
        {props.teks}
      </div>
    </div>
  );
};

export default CardProduct;
