/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

const CardService = (props) => {
	return (
		<div className="card hover:scale-105 transa flex-grow-0 flex-shrink-0 bg-white rounded-[20px] shadow-md max-[320px]:py-5 py-8 max-[320px]:px-4 px-7 w-96 hover:bg-primary2 hover:text-white transition-all duration-300">
			<div className="icon bg-[#F4F4F4] inline-block max-[320px]:p-2 p-3 rounded-lg">
				{props.children}
			</div>
			<div className="wr flex items-center gap-2 mt-5">
				<div className="garis h-[30px] w-[5px] bg-primary"></div>
				<h4 className="pro max-[320px]:text-lg text-2xl font-bold">
					{props.service}
				</h4>
			</div>
			<p className="teks max-[320px]:text-sm text-base text-justify mt-2">
				{props.teks}
			</p>
		</div>
	);
};

export default CardService;
