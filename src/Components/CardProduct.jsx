/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
const CardProduct = (props) => {
	return (
		<div className="flex flex-wrap gap-3 px-6 py-5 bg-white rounded-lg shadow-md card md:flex-nowrap text-primary items-center">
			<div className="img flex justify-center w-full flex-shrink-0 flex-grow-0 md:w-52 overflow-hidden rounded-md aspect-video">
				<img
					className="object-cover h-full"
					src={props.img}
					alt="Product Reclas Tech"
				/>
			</div>
			<div className="text-black teks">
				<h4 className="font-bold text-primary text-lg">
					{props.title}
				</h4>
				<p className="max-[320px]:text-sm">{props.teks}</p>
			</div>
		</div>
	);
};

export default CardProduct;
