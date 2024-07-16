'use client';

import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { BookLink } from '@/app/lib/definations';
import React, { useState, useRef, Suspense } from 'react';
import Book from '@/public/images/book.png';
import Tool from '@/public/images/tools.png';
import variables from '@/app/ui/Style/_defination.module.scss';
import clsx from 'clsx';
import LinkSelection from './LinkSelection';

const bgCode = {
	code: variables.colorCode,
	codeOnHover: variables.colorCodeHover,
};

function TopSelectionPC({
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

function TopSelectionMobile() {}

function Loading() {
	return (
		<p
			className={`bg-[${bgCode.code}] block relative rounded-b-md p-2 w-fit h-fit roboto text-white`}>
			Loading...
		</p>
	);
}

export default function Page() {
	//** useRef declaration
	const data = useRef<Omit<BookLink, 'Author'>>({ Grade: 10, Subject: 'Math' });
	const LinkText = useRef(['']);
	const LinksArray = useRef([['']]);
	const LinkComponent = useRef(null);

	const activateState = useRef({
		Study: false,
		Utility: false,
	});

	const passingRef = useRef({
		LinkText: LinkText,
		LinksArray: LinksArray,
	});

	//* useState declaration
	const [content, setContent] = useState(<></>);
	const [dataIsFull, setDataStatus] = useState(false);

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
			<div
				onClick={() => {
					activateState.current.Study = false;
					setDataStatus(true);
				}}
				className={clsx('hidden relative', { '[&]:block': activateState.current.Study })}>
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

	return (
		<main>
			<div
				className={`border-solid border-white border-b-[1px] w-screen bg-[${bgCode.code}] grid grid-cols-[repeat(21,1fr)] grid-rows-[10vh] items-items-center justify-center`}>
				<div className="h-full col-start-1 col-end-4 ">
					<div className="h-full w-full flex items-center justify-center text-white text-[35px] paytone-one">
						<Link href="/home">iLearn</Link>
					</div>
				</div>
				<div className="h-full col-start-4 col-end-9">
					{TopSelectionPC({
						text: 'Học tập',
						imgSrc: Book,
						onClick: () => {
							activateState.current.Study = !activateState.current.Study;
							activateState.current.Utility = activateState.current.Utility && false;
							setContent(GradeSelection);
							setDataStatus(false);
						},
					})}
					{activateState.current.Study && content}
				</div>
				<div className="h-full col-start-9 col-end-[14]">
					{TopSelectionPC({
						text: 'Tiện ích',
						imgSrc: Tool,
						onClick: () => {
							activateState.current.Utility = !activateState.current.Utility;
							activateState.current.Study = activateState.current.Study && false;
							setContent(<p>Utilities</p>);
						},
					})}
					{/* {activateState.current.Utility && content} */}
				</div>
			</div>
			{!activateState.current.Utility && !activateState.current.Study && dataIsFull && (
				<Suspense fallback={<Loading />}>
					<LinkSelection ref={LinkComponent} data={data.current} refProps={passingRef} />
				</Suspense>
			)}
		</main>
	);
}
