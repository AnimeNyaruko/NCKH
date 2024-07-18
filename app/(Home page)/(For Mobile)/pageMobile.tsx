'use client';

import Logo from '@/app/icon.svg';
import Image from 'next/image';
import { useState } from 'react';
import variable from '@/app/ui/Style/_defination.module.scss';
import Search from '@/app/ui/Home Page/searchbar';

import Study from './StudySelection';

const bgColor = {
	normal: variable.colorCode,
	hover: variable.colorCodeHover,
};

export default function Page() {
	const [selections, setSelectionsContent] = useState(<Study />);
	return (
		<div className="w-full h-full">
			<div
				id="header"
				className="h-[10vh] md:h-[12.5vh] w-screen sticky top-0 flex justify-between items-center">
				<Image src={Logo} alt="Logo" className="ml-4 md:ml-10 h-1/2 w-auto" />
				<div id="searchBar" className="md:w-[40%] flex justify-end">
					<Search width="w-[80%] md:w-full" height="h-full" />
				</div>
			</div>
			<div id="website name" className="h-fit w-full flex items-center justify-center">
				<p className={`text-[${bgColor.normal}] paytone-one text-[35px] md:text-[42.5px] mb-3`}>
					iLearn
				</p>
			</div>
			<div id="introduction_paragraph" className="w-[95%] mx-auto">
				<p className="md:text-[20px] text-center">
					iLearn - Đồng hành cùng bạn trong suốt khoảng thời gian cấp ba
				</p>
			</div>
			<div
				id="selection_bar"
				className={`mt-3 grid grid-cols-[1fr_1px_1fr] grid-rows-[fit-content] h-fit w-screen`}>
				<div
					className={`select-none w-full h-fit bg-[${bgColor.normal}] hover:bg-[${bgColor.hover}]`}>
					<p className="text-center text-white text-[30px] md:text-[37.5px] paytone-one ">
						Học tập
					</p>
				</div>
				<hr className="bg-white" />
				<div
					className={`select-none w-full h-fit bg-[${bgColor.normal}] hover:bg-[${bgColor.hover}]`}>
					<p className="text-center text-white text-[30px] md:text-[37.5px] paytone-one ">
						Tiện ích
					</p>
				</div>
			</div>
			{selections}
		</div>
	);
}
