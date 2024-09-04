'use client';

import variables from '@/app/ui/Style/_defination.module.scss';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, Suspense } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import { PaytoneOne, Roboto } from '@/app/ui/Style/font';
import { BookLink } from '@/app/lib/definations';
import { SubjectColor } from './bgGradientConfig';
import LinkSelection from './LinkSelection';
// import LinkSelection from './LinkSelection';

import MathIcon from '@/public/images/MathIcon.png';
import PhysicIcon from '@/public/images/PhysicIcon.png';
import ChemicalIcon from '@/public/images/ChemicalIcon.png';

const bgColor = {
	normal: variables.colorCode,
	hover: variables.colorCodeHover,
};

function Selector({ onClick, text }: { onClick?: any; text: string }) {
	return (
		<div
			onClick={onClick}
			className="group flex items-center justify-between w-[80%] h-fit rounded-full bg-white opacity-75 hover:opacity-100 py-2">
			<p className={`ml-4 text-[20px] ${Roboto.className}`}>{text}</p>
			<FontAwesomeIcon
				className="transition-transform group-hover:rotate-180 text-white brightness-[.65] mr-4 text-[150%]"
				icon={faCaretDown}
			/>
		</div>
	);
}

export default function Study() {
	const data = useRef<BookLink>({
		Grade: 10,
		Subject: 'Math',
		Author: 'CD',
	});

	const SubjectTitle = useRef({
		color: '',
		icon: MathIcon,
		text: '',
	});

	const [content, setContent] = useState(
		<>
			<Selector
				onClick={() => {
					data.current.Grade = 10;
					SubjectSelection();
				}}
				text="Lớp 10"
			/>
			<Selector
				onClick={() => {
					data.current.Grade = 11;
					SubjectSelection();
				}}
				text="Lớp 11"
			/>
			<Selector
				onClick={() => {
					data.current.Grade = 12;
					SubjectSelection();
				}}
				text="Lớp 12"
			/>
		</>
	);

	const [isFulFilled, setFulFilled] = useState(false);

	function SubjectSelection() {
		setContent(
			<>
				<Selector
					onClick={() => {
						data.current.Subject = 'Math';
						SubjectTitle.current.color = SubjectColor.Math;
						SubjectTitle.current.icon = MathIcon;
						SubjectTitle.current.text = 'TOÁN';
						AuthorSelection();
					}}
					text="Môn Toán"
				/>
				<Selector
					onClick={() => {
						data.current.Subject = 'Physic';
						SubjectTitle.current.color = SubjectColor.Physic;
						SubjectTitle.current.icon = PhysicIcon;
						SubjectTitle.current.text = 'VẬT LÝ';
						AuthorSelection();
					}}
					text="Môn Lý"
				/>
				<Selector
					onClick={() => {
						data.current.Subject = 'Chemical';
						SubjectTitle.current.color = SubjectColor.Chemical;
						SubjectTitle.current.icon = ChemicalIcon;
						SubjectTitle.current.text = 'HÓA HỌC';
						AuthorSelection();
					}}
					text="Môn Hóa"
				/>
			</>
		);
	}
	function AuthorSelection() {
		setContent(
			<>
				<Selector
					onClick={() => {
						data.current.Author = 'CD';
						setFulFilled(true);
					}}
					text="Cánh diều"
				/>
				<Selector
					onClick={() => {
						data.current.Author = 'CTST';
						setFulFilled(true);
					}}
					text="Chân trời sáng tạo"
				/>
				<Selector
					onClick={() => {
						data.current.Author = 'KNTT';
						setFulFilled(true);
					}}
					text="Kết nối tri thức"
				/>
			</>
		);
	}
	// async function temp() {
	// 	await new Promise((res) => {
	// 		setTimeout(() => {
	// 			res('done');
	// 		}, 5000);
	// 	});
	// 	return <p></p>;
	// }

	return !isFulFilled ? (
		<div
			className={` grid grid-cols-1 grid-rows-3 gap-y-3 py-3 justify-items-center items-center w-screen h-fit bg-[${bgColor.normal}]`}>
			{content}
		</div>
	) : (
		<Suspense fallback={<p>loading...</p>}>
			<div className="mx-auto mt-2 w-[90%] bg-slate-200 rounded-[1.5rem] pb-5">
				<div className="mx-auto w-[90%] grid grid-cols-1 grid-rows-6 gap-y-2">
					<div className="self-center flex justify-between items-center">
						<p className="ml-2 text-lg text-[#257fce] h-fit">Lớp {data.current.Grade}</p>
						<FontAwesomeIcon className="opacity-35 text-lg mr-2" icon={faAngleDown} />
					</div>
					<div
						id="title"
						className={`h-[3em] rounded-full relative bg-left bg-gradient-to-r ${SubjectTitle.current.color}`}>
						<div
							className="relative top-1/2 -translate-y-1/2 h-3/4 mx-5 grid grid-cols-[auto_1fr] grid-rows-1 items-center gap-x-5 text-white"
							style={PaytoneOne.style}>
							<div className="h-[85%]">
								<Image
									src={SubjectTitle.current.icon}
									alt="Math Icon"
									objectFit="fit"
									className="w-auto h-full"
								/>
							</div>
							<p className="justify-self-start h-min text-center text-lg">
								{SubjectTitle.current.text}
							</p>
						</div>
					</div>
					<LinkSelection data={data.current} />
				</div>
			</div>
		</Suspense>
	);
}
