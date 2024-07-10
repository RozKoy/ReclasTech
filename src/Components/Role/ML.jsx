/* eslint-disable react-refresh/only-export-components */
import Slider from "react-slick";

import CardRole from "../CardRole";

const ML = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
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
					<div className="py-2 bg-srWhite md:mr-5 mr-0 pb-7 justify-center flex md:justify-end text-center">
						<CardRole
							img="Images/role3.png"
							nama="TAMTAM"
							role="Machine Learning"
						/>
					</div>
				</div>
			</Slider>
		</div>
	);
};

export default ML;
