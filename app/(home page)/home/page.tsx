'use client';

import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { BookLink } from '@/app/lib/definations';
import { fetchAllAuthorLinks } from '@/app/lib/actions';
import React, { useState, useRef } from 'react';
import Book from '@/public/images/book.png';
import Tool from '@/public/images/tools.png';
import variables from '@/app/ui/Style/_defination.module.scss';
import clsx from 'clsx';

const bgCode = {
	code: variables.colorCode,
	codeOnHover: variables.colorCodeHover,
};

function TopSelection({
	text,
	imgSrc,
	onClick,
}: {
	text: string;
	imgSrc: StaticImageData;
	onClick?: (...rest: any) => void;
}) {
	return (
		<div
			onClick={onClick}
			className={`select-none hover:bg-[${bgCode.codeOnHover}] cursor-pointer h-full w-full relative flex items-center justify-center gap-2 `}>
			<p className="text-[35px] text-white text-center paytone-one">{text}</p>
			<Image className="relative block h-[35%] w-auto mt-2" src={imgSrc} alt="Book Icon" />
		</div>
	);
}

export default function Page() {
	const data = useRef<Omit<BookLink, 'Author'>>({ Grade: 10, Subject: 'Math' });
	const LinksArray = useRef(Array<Array<string>>);

	const activateState = useRef({
		Study: false,
		Utility: false,
	});

	const [content, setContent] = useState(<></>);

	const fetchAuthor = async () => {
		const components = await fetchAllAuthorLinks(data.current);
		return components;
	};

	//** Selector is a CHILD COMPONENT for SubjectSelector, GradeSelector.
	const Selector = ({
		text,
		onClick,
		additionClass,
	}: {
		text: string;
		onClick: (...rest: any) => void;
		additionClass?: string;
	}) => {
		return (
			<div
				onClick={onClick}
				className={
					`cursor-pointer flex items-center justify-center w-full hover:bg-[${bgCode.codeOnHover}] ` +
					additionClass
				}>
				<p className="text-[15px] lg:text-[30px] text-white paytone-one ">{text}</p>
			</div>
		);
	};

	const SubjectSelection = () => {
		return (
			<div className={clsx('hidden relative', { '[&]:block': activateState.current.Study })}>
				<div
					onClick={() => {}}
					className={`bg-[${bgCode.code}] flex flex-col w-full rounded-b-2xl gap-y-2`}>
					<Selector
						onClick={() => {
							data.current.Subject = 'Math';
						}}
						text="Môn Toán"
					/>
					<Selector
						onClick={() => {
							data.current.Subject = 'Physic';
						}}
						text="Môn Lý"
					/>
					<Selector
						onClick={() => {
							data.current.Subject = 'Chemical';
						}}
						text="Môn Hóa"
						additionClass="rounded-b-2xl"
					/>
				</div>
			</div>
		);
	};
	const GradeSelection = () => {
		return (
			<div
				onClick={() => {
					setContent(SubjectSelection);
				}}
				className={clsx('hidden relative', { '[&]:block': activateState.current.Study })}>
				<div
					onClick={() => {}}
					className={`bg-[${bgCode.code}] flex flex-col w-full rounded-b-2xl gap-y-2`}>
					<Selector
						onClick={() => {
							data.current.Grade = 10;
						}}
						text="Lớp 10"
					/>
					<Selector
						onClick={() => {
							data.current.Grade = 11;
						}}
						text="Lớp 11"
					/>
					<Selector
						onClick={() => {
							data.current.Grade = 12;
						}}
						text="Lớp 12"
						additionClass="rounded-b-2xl"
					/>
				</div>
			</div>
		);
	};

	const LinkSelection = () => {
		return (
			<div className={clsx('hidden relative', { '[&]:block': activateState.current.Study })}>
				<div
					onClick={() => {}}
					className={`bg-[${bgCode.code}] flex flex-col w-full rounded-b-2xl gap-y-2`}>
					<Selector
						onClick={() => {
							data.current.Subject = 'Math';
						}}
						text="Môn Toán"
					/>
					<Selector
						onClick={() => {
							data.current.Subject = 'Physic';
						}}
						text="Môn Lý"
					/>
					<Selector
						onClick={() => {
							data.current.Subject = 'Chemical';
						}}
						text="Môn Hóa"
						additionClass="rounded-b-2xl"
					/>
				</div>
			</div>
		);
	};

	return (
		<main>
			<div
				className={`w-screen bg-[${bgCode.code}] grid grid-cols-[repeat(23,1fr)] grid-rows-[10vh] items-items-center justify-center`}>
				{}
				<div className="h-full col-start-1 col-end-5 ">
					<div className="h-full w-full flex items-center justify-center text-white text-[35px] paytone-one">
						<Link href="/home">iLearn</Link>
					</div>
				</div>
				<div className="h-full col-start-5 col-end-10">
					{TopSelection({
						text: 'Học tập',
						imgSrc: Book,
						onClick: () => {
							activateState.current.Study = !activateState.current.Study;
							activateState.current.Utility = activateState.current.Study && false;
							setContent(GradeSelection);
						},
					})}
					{activateState.current.Study && content}
				</div>
				<div className="h-full col-start-10 col-end-[15]">
					{TopSelection({
						text: 'Tiện ích',
						imgSrc: Tool,
						onClick: () => {
							activateState.current.Utility = !activateState.current.Utility;
							activateState.current.Study = activateState.current.Utility && false;
							setContent(<p>Utilities</p>);
						},
					})}
					{/* {activateState.current.Utility && content} */}
				</div>
			</div>
		</main>
	);
}
