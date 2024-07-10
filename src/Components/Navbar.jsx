import { useEffect, useState } from "react";

import Burger from "./Icon/Burger";
import Close from "./Icon/Close";

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);
	const [burger, setBurger] = useState(false);

	const handleBurger = () => {
		setBurger(!burger);
	};

	const handleScroll = () => {
		const isScrolled = window.scrollY > 0;
		setScrolled(isScrolled);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="">
			<div
				className={`fixed hidden md:block w-full z-50 transition-all duration-300 ease-in-out ${
					scrolled ? "bg-navbar/50" : ""
				}`}
			>
				<div className="wrap py-3 px-4 m-auto container flex justify-between items-center">
					<div className="logo">
						<img
							src="Images/logo1.png"
							alt="reclas-logo"
							className="w-10"
						/>
					</div>
					<div className="nav flex items-center justify-end gap-7 text-base text-white">
						<a href="#Home" className="hover:text-white/75">
							Beranda
						</a>
						<a href="#about" className="hover:text-white/75">
							Tentang
						</a>
						<a href="#service" className="hover:text-white/75">
							Layanan
						</a>
						<a href="#testi" className="hover:text-white/75">
							Testimoni
						</a>
						<a href="#contact" className="hover:text-white/75">
							Kontak
						</a>
					</div>
				</div>
			</div>
			{/* responsive */}
			<div
				className={`fixed w-full z-50 transition-all duration-300 ease-in-out block md:hidden ${
					scrolled ? "bg-navbar/50" : ""
				}`}
			>
				<div className="wrap py-2 px-3 m-auto container flex justify-between items-center">
					<div className="nav flex items-end flex-col gap-1.5 w-full text-white">
						<div className="wrap-head flex w-full items-center justify-between">
							<div className="logo">
								<img
									src="Images/logo1.png"
									alt="reclas-logo"
									className="w-10 max-[300px]:w-9"
								/>
							</div>
							<div
								className="res bg-primary2/50 rounded-md w-11 max-[300px]:w-10 p-3 max-[300px]:p-2.5 aspect-square flex justify-center items-center text-sm font-bold cursor-pointer"
								onClick={handleBurger}
							>
								{burger ? <Close /> : <Burger />}
							</div>
						</div>

						<div
							className={`wrap ${
								burger
									? "flex opacity-100"
									: "hidden opacity-0 "
							}  bg-primary/75 w-full items-center max-[300px]:text-sm flex-col gap-4 py-3.5 rounded-lg transition-all duration-500`}
						>
							<a href="#Home" className="">
								Beranda
							</a>
							<a className="" href="#about">
								Tentang
							</a>
							<a className="" href="#service">
								Layanan
							</a>
							<a className="" href="#testi">
								Testimoni
							</a>
							<a className="" href="#contact">
								Kontak
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
