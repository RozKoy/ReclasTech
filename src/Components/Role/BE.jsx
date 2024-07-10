/* eslint-disable react-refresh/only-export-components */
import Slider from "react-slick";

import CardRole from "../CardRole";

const BE = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 768, // Breakpoint for medium screens and below (md)
				settings: {
					arrows: false,
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div>
			<Slider {...settings}>
				<div className="">
					<div className="py-2 pb-7 bg-srWhite flex justify-center md:justify-end text-center">
						<CardRole
							img="Images/role3.png"
							nama="ROZIN"
							role="Back End"
						/>
					</div>
				</div>
				<div className="">
					<div className="py-2 pb-7 bg-srWhite  flex justify-center text-center">
						<CardRole
							img="Images/role3.png"
							nama="NDARU"
							role="Back End"
						/>
					</div>
				</div>
				<div className="">
					<div className="py-2 pb-7 bg-srWhite flex justify-center md:justify-start text-center">
						<CardRole
							img="Images/role3.png"
							nama="TAMTAM"
							role="Back End"
						/>
					</div>
				</div>
			</Slider>
		</div>
	);
};

export default BE;
