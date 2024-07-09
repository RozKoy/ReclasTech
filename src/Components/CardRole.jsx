/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const CardRole = (props) => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.7 }}
			className=" w-[260px] shadow-lg flex flex-col overflow-hidden rounded-[18px]"
		>
			<div className="head bg-primary rounded-t-[18px] h-[275px] rounded-t-3xlt p-6 relative ">
				<div className="teks text-start text-[14px] text-white font-bold ">
					YOUR <br /> VISION <br />
					OUR <br /> CODE
				</div>
				<div className="img text-center absolute w-[210px] bottom-0">
					<img src={props.img} alt="" />
				</div>
			</div>
			<div className="subhead h-[118px] rounded-b-[18px] bg-white flex flex-col justify-center items-center">
				<div className="name text-[38px] font-extrabold text-primary">
					{props.nama}
				</div>
				<div className="role -mt-3 text-[12px]">{props.role}</div>
				<div className="img mt-3">
					<img
						className="h-[22px]"
						src="Images/rolelogo2.png"
						alt=""
					/>
				</div>
			</div>
		</motion.div>
	);
};

export default CardRole;
