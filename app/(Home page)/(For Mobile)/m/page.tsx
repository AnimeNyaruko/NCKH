'use client';

import Logo from '@/app/icon3.png';
import Image from 'next/image';
import { useState } from 'react';
import variable from '@/app/ui/Style/_defination.module.scss';

import Study from './(Study Selection)/StudySelection';
import Utility from './UtilitySelections';
import Books from '@/public/images/community/books.png';
import QnA from '@/public/images/community/QnA.png';

import { PaytoneOne } from '@/app/ui/Style/font';

const bgColor = {
	normal: variable.colorCode,
	hover: variable.colorCodeHover,
};

export default function Page() {
	const [selections, setSelectionsContent] = useState<any>(null);
	const [isDisplay, setDisplayStatus] = useState(false);
	return (
		<div className="flex flex-col w-full grow">
			<div
				id="header"
				className="h-[10vh] md:h-[12.5vh] w-screen sticky top-0 flex justify-between items-center border-solid border-white border-b-[1px]">
				<Image src={Logo} alt="Logo" className="ml-4 md:ml-10 h-1/2 w-auto" />
				<div id="searchBar" className="md:w-[40%] flex justify-center items-center pr-5">
					<p style={PaytoneOne.style} className="w-fit text-3xl text-white drop-shadow-white-lg">
						Trang chủ
					</p>
				</div>
			</div>
			<div id="website name" className="h-fit w-full flex items-center justify-center">
				<p
					style={PaytoneOne.style}
					className={`text-[${bgColor.normal}] text-[35px] md:text-[42.5px] mb-3 drop-shadow-[2px_2px_4px_#3a86ff]`}>
					iLearn
				</p>
			</div>
			<div
				id="selection_bar"
				className={`relative mt-3 grid grid-cols-[1fr_1px_1fr] grid-rows-[fit-content] h-fit w-screen`}>
				<button
					type="button"
					onClick={() => {
						setSelectionsContent(<Study />);
					}}
					onBlur={() => {
						setSelectionsContent(null);
					}}
					className={`relative select-none w-full h-fit bg-[${bgColor.normal}] hover:bg-[${bgColor.hover}]`}>
					<p
						style={PaytoneOne.style}
						className="text-center text-white text-[30px] md:text-[37.5px] ">
						Học tập
					</p>
				</button>
				<div className="border border-l-white" />
				<button
					type="button"
					onClick={() => {
						setSelectionsContent(<Utility />);
					}}
					onBlur={() => {
						setSelectionsContent(null);
					}}
					className={`relative select-none w-full h-fit bg-[${bgColor.normal}] hover:bg-[${bgColor.hover}]`}>
					<p
						style={PaytoneOne.style}
						className="text-center text-white text-[30px] md:text-[37.5px] ">
						Diễn đàn
					</p>
				</button>

				{selections && (
					<div
						className={`absolute top-full grid grid-cols-1 grid-rows-1 gap-y-3 py-3 justify-items-center items-center w-screen h-fit bg-[${bgColor.normal}]`}>
						{selections}
					</div>
				)}
			</div>
			<div
				id="introduction"
				className="grow w-full flex flex-col justify-between items-center px-5 pt-5 pb-32 text-white text-xs">
				<p>
					<span style={PaytoneOne.style}>iLearn</span> là một nền tảng học tập tiên tiến, được thiết
					kế đặc biệt cho học sinh cấp 3 có nhu cầu học các môn <b>Toán, Lý, và Hóa</b>. Với tên gọi
					mang ý nghĩa <b>{'"học tập thông minh,"'}</b> <span style={PaytoneOne.style}>iLearn</span>
					{'  '}
					cam kết mang đến trải nghiệm học tập tiện lợi và hiện đại cho người dùng.
				</p>
				<p style={PaytoneOne.style} className="text-white text-xl">
					TÍNH NĂNG NỔI BẬT
				</p>
				<div className="flex justify-between">
					<p>
						Học tập: Cung cấp đường dẫn đến các sách giáo khoa điện tử, sách bài tập, và lời giải từ
						các trang web học tập uy tín. Điều này giúp học sinh dễ dàng truy cập và ôn tập kiến
						thức mọi lúc, mọi nơi.
					</p>
					<div className="h-full w-full">
						<Image alt="" src={Books} className="object-contain w-full h-full" />
					</div>
				</div>
				<div className="flex justify-between">
					<div className="h-full w-full">
						<Image alt="" src={QnA} className="object-contain w-3/4 h-auto" />
					</div>
					<p>
						Diễn đàn: Là nơi để cộng đồng học sinh chia sẻ tài liệu, hình ảnh và file bài học, giúp
						tăng cường sự kết nối và học hỏi lẫn nhau mà không cần phải đăng nhập hay tạo tài khoản.
					</p>
				</div>
			</div>
		</div>
	);
}
