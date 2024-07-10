/* eslint-disable react/no-unescaped-entities */
import { Component } from "react";
import Slider from "react-slick";

import CardTesti2 from "./CardTesti2";

export default class MultipleItems extends Component {
	render() {
		const settings = {
			autoplaySpeed: 4000,
			slidesToScroll: 1,
			slidesToShow: 3,
			autoplay: true,
			infinite: true,
			speed: 750,
			dots: true,
			responsive: [
				{
					breakpoint: 768, // Breakpoint for medium screens and below (md)
					settings: {
						slidesToScroll: 1,
						slidesToShow: 1,
						arrows: false,
					},
				},
			],
		};

		return (
			<div>
				<Slider {...settings}>
					<CardTesti2
						name="PT. ElyNaz IndoMasr"
						teks="Reclas Tech benar-benar mengerti apa yang kami butuhkan. Mereka membantu kami mengembangkan sistem manajemen inventaris yang sangat membantu dalam operasional sehari-hari. Komunikasi yang lancar dan hasil yang memuaskan membuat kami sangat senang dengan kerja sama ini."
					/>
					<CardTesti2
						name="Bimbel Griselda"
						teks="Bekerja dengan Reclas Tech adalah pengalaman yang luar biasa. Tim mereka sangat ahli dan berdedikasi. Platform pembelajaran online yang mereka buat sangat user-friendly dan memenuhi semua kebutuhan kami. Saya sangat merekomendasikan mereka!"
					/>
					<CardTesti2
						name="Yang's Grosir"
						teks="Reclas Tech sangat terpercaya. Pelayanan yang ramah, respons yang cepat, dan kualitas yang bagus membuat kami sangat puas dengan kerja sama ini. Kami sangat senang dengan kerja sama ini."
					/>
					<CardTesti2
						teks="Saya sangat terkesan dengan layanan dari Reclas Tech. Tim mereka profesional dan sangat responsif terhadap kebutuhan kami. Website yang dibuat membantu kami dalam mengembangkan usaha. Kami pasti akan bekerja sama lagi di masa depan!"
						name="Kedai Bu Titin"
					/>
				</Slider>
			</div>
		);
	}
}
