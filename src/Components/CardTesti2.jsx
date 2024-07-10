/* eslint-disable react/no-unescaped-entities */
import Star from "./Icon/Star";

const CardTesti2 = (props) => {
	return (
		<div className="px-3">
			<div className="bg-srWhite h-[364px] rounded-[30px] text-center px-4 py-6">
				<div className="wrap flex  flex-col h-full items-center">
					<div className="img w-[100px] h-[100px] bg bg-red-200 rounded-full">
						<img
							className="h-full object-cover"
							src="Images/userr.png"
							alt=""
						/>
					</div>
					<div className="star mt-2">
						<Star />
					</div>
					<div className="teks m-auto md:w-[80%] mt-3">
						<p className="text-[14px] text-[#] text-center">
							{props.teks}
						</p>
						<p className="font-bold mt-2 text-primary">
							{props.name}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardTesti2;
