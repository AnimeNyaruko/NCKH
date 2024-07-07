'use client';

import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { BookLink } from '@/app/lib/definations';
import { fetchAllAuthorLinks } from '@/app/lib/actions';
import React, { useState, useRef, useCallback } from 'react';
import Book from '@/public/images/book.png';
import Tool from '@/public/images/tools.png';
import variables from '@/app/ui/Style/_defination.module.scss';
import clsx from 'clsx';

const bgCode = {
	code: variables.colorCode,
	codeOnHover: variables.colorCodeHover,
};
function BookTypeName(data: Omit<BookLink, 'Author'>) {
	let { Grade, Subject } = data;
	switch (Subject) {
		case 'Math':
			Subject = 'Toán';
			break;
		case 'Physic':
			Subject = 'Lý';
			break;
		default:
			Subject = 'Hóa';
			break;
	}
	return [
		`Sách giáo khoa ${Subject} ${Grade}`,
		`Giải sách giáo khoa ${Subject} ${Grade}`,
		`Sách bài tập ${Subject} ${Grade}`,
		`Giải sách giáo khoa ${Subject} ${Grade}`,
	];
}

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
	const LinkText = useRef(['']);
	const LinksArray = useRef([['']]);

	const activateState = useRef({
		Study: false,
		Utility: false,
	});

	const [content, setContent] = useState(<></>);
	const [dataIsFull, setDataStatus] = useState(false);

	const fetchAuthor = useCallback(async () => {
		console.log('called');
		LinkText.current = BookTypeName(data.current);
		LinksArray.current = await fetchAllAuthorLinks(data.current);
		setDataStatus(true);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dataIsFull]);

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
				onClick={async () => {
					activateState.current.Study = false;
					await fetchAuthor();
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

	const LinkSelection = (isLoaded: boolean) => {
		return (
			<div
				className={clsx('hidden relative left-1/2 -translate-x-1/2 w-3/4 h-auto', {
					'[&]:block': dataIsFull,
				})}>
				<div
					className={`pt-5 bg-[${bgCode.code}] grid grid-cols-[repeat(3,1fr)] grid-rows-[auto] w-full h-full rounded-b-2xl gap-y-2`}>
					{['Cánh diều', 'Chân trời sáng tạo', 'Kết nối tri thức'].map((e, i) => {
						i = i + 1;
						return (
							<div
								key={e}
								className={`border-solid border-white ${
									i == 2 && 'border-x-[1px]'
								} grid grid-cols-auto grid-rows-[max-content_repeat(2,max-content)_min-content_repeat(2,max-content)] justify-center`}>
								<div
									className={`col-start-${i} col-end-${
										i + 1
									} row-start-1 row-end-2 flex items-center justify-center`}>
									<p className="text-[25px] text-white font-bold paytone-one">{e}</p>
								</div>
								<hr className={`w- h-min col-start-${i} col-end-${i + 1} row-start-4 row-end-5`} />
								{LinksArray.current[i - 1].map((e, _index, arr) => {
									const index = _index + 2 >= 4 ? _index + 1 : _index;
									return (
										<div
											key={`Colum${i} - Row${index + 1}`}
											className={`col-start-${i} col-end-${i + 1} ${
												_index == 0 ? 'mt-3' : _index == arr.length - 1 ? 'mb-3' : 'my-3'
											} row-start-${index + 2} row-end-${
												index + 3
											} flex items-center justify-center`}>
											<Link href={`${e}`} className="text-[15px] text-white carlito">
												{LinkText.current[_index]}
											</Link>
										</div>
									);
								})}
							</div>
						);
					})}
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
					{TopSelection({
						text: 'Học tập',
						imgSrc: Book,
						onClick: () => {
							activateState.current.Study = !activateState.current.Study;
							activateState.current.Utility = activateState.current.Study && false;
							setContent(GradeSelection);
							setDataStatus(false);
						},
					})}
					{activateState.current.Study && content}
				</div>
				<div className="h-full col-start-9 col-end-[14]">
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
			{!activateState.current.Study && dataIsFull && LinkSelection(dataIsFull)}
		</main>
	);
}
