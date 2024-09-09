'use client';

import {
	Dispatch,
	MutableRefObject,
	SetStateAction,
	Suspense,
	useEffect,
	useRef,
	useState,
} from 'react';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Color } from '../color.config';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import Book from '@/public/images/book.png';
import { BookLink } from '@/app/lib/definations';
import { fetchAllAuthorLinks } from '@/app/lib/actions';
import Link from 'next/link';

import { Carlito } from '@/app/ui/Style/font';
import clsx from 'clsx';

function SelectionComponent(props: {
	pending: Dispatch<SetStateAction<boolean>>;
	data: MutableRefObject<Omit<BookLink, 'url' | 'Author'>>;
}) {
	const { pending, data } = props;
	return (
		<ul className="study-container group-hover/drop:flex hidden flex-col items-center gap-y-5 pt-2 pb-5 group-hover/drop:border-2 group-hover/drop:border-t-0 border-solid border-white/25 rounded-b-[20px] absolute w-full top-full text-white text-2xl font-bold bg-white/25">
			<li
				onMouseEnter={() => {
					data.current.Grade = 10;
				}}
				className="group/drop1 w-full h-fit flex justify-center">
				<div className="relative flex justify-center items-center w-3/4 py-2 rounded-full border-0 bg-[#555]">
					<p className="w-fit text-center">Lớp 10</p>
					<FontAwesomeIcon
						className="absolute right-0 transition-all text-black group-hover/drop1:rotate-180 group-hover/drop1:text-white"
						icon={faCaretLeft}
						fixedWidth
					/>
				</div>
				<ul className="group-hover/drop1:block w-fit bg-white/25 rounded-[20px] border-2 border-solid border-white/25 px-12 py-3 hidden ml-3 absolute left-full backdrop-blur-sm">
					<div className="subject-container">
						<li
							onClick={() => {
								data.current.Subject = 'Math';
								pending(true);
							}}
							className="cursor-pointer w-full h-fit rounded-full bg-[#555]">
							<div className="relative w-full h-auto pl-5 pr-12 py-2 flex justify-center items-center circle-container">
								<p>Toán</p>
								<div className="circle" />
							</div>
						</li>
						<li
							onClick={() => {
								data.current.Subject = 'Physic';
								pending(true);
							}}
							className="cursor-pointer w-full h-fit rounded-full bg-[#555]">
							<div className="relative w-full h-auto pl-5 pr-12 py-2 flex justify-center items-center circle-container">
								<p>Lý</p>
								<div className="circle" />
							</div>
						</li>
						<li
							onClick={() => {
								data.current.Subject = 'Chemical';
								pending(true);
							}}
							className="cursor-pointer w-full h-fit rounded-full bg-[#555]">
							<div className="relative w-full h-auto pl-5 pr-12 py-2 flex justify-center items-center circle-container">
								<p>Hóa</p>
								<div className="circle" />
							</div>
						</li>
					</div>
				</ul>
			</li>
			<li
				onMouseEnter={() => {
					data.current.Grade = 11;
				}}
				className="group/drop1 w-full h-fit flex justify-center">
				<div className="relative flex justify-center items-center w-3/4 py-2 rounded-full border-0 bg-[#555]">
					<p className="w-fit text-center">Lớp 11</p>
					<FontAwesomeIcon
						className="absolute right-0 transition-all text-black group-hover/drop1:rotate-180 group-hover/drop1:text-white"
						icon={faCaretLeft}
						fixedWidth
					/>
				</div>
				<ul className="group-hover/drop1:block w-fit bg-white/25 rounded-[20px] border-2 border-solid border-white/25 px-12 py-3 hidden ml-3 absolute left-full backdrop-blur-sm">
					<div className="subject-container">
						<li
							onClick={() => {
								data.current.Subject = 'Math';
								pending(true);
							}}
							className="cursor-pointer w-full h-fit rounded-full bg-[#555]">
							<div className="relative w-full h-auto pl-5 pr-12 py-2 flex justify-center items-center circle-container">
								<p>Toán</p>
								<div className="circle" />
							</div>
						</li>
						<li
							onClick={() => {
								data.current.Subject = 'Physic';
								pending(true);
							}}
							className="cursor-pointer w-full h-fit rounded-full bg-[#555]">
							<div className="relative w-full h-auto pl-5 pr-12 py-2 flex justify-center items-center circle-container">
								<p>Lý</p>
								<div className="circle" />
							</div>
						</li>
						<li
							onClick={() => {
								data.current.Subject = 'Chemical';
								pending(true);
							}}
							className="cursor-pointer w-full h-fit rounded-full bg-[#555]">
							<div className="relative w-full h-auto pl-5 pr-12 py-2 flex justify-center items-center circle-container">
								<p>Hóa</p>
								<div className="circle" />
							</div>
						</li>
					</div>
				</ul>
			</li>
			<li
				onMouseEnter={() => {
					data.current.Grade = 12;
				}}
				className="group/drop1 w-full h-fit flex justify-center">
				<div className="relative flex justify-center items-center w-3/4 py-2 rounded-full border-0 bg-[#555]">
					<p className="w-fit text-center">Lớp 12</p>
					<FontAwesomeIcon
						className="absolute right-0 transition-all text-black group-hover/drop1:rotate-180 group-hover/drop1:text-white"
						icon={faCaretLeft}
						fixedWidth
					/>
				</div>
				<ul className="group-hover/drop1:block w-fit bg-white/25 rounded-[20px] border-2 border-solid border-white/25 px-12 py-3 hidden ml-3 absolute left-full backdrop-blur-sm">
					<div className="subject-container">
						<li
							onClick={() => {
								data.current.Subject = 'Math';
								pending(true);
							}}
							className="cursor-pointer w-full h-fit rounded-full bg-[#555]">
							<div className="relative w-full h-auto pl-5 pr-12 py-2 flex justify-center items-center circle-container">
								<p>Toán</p>
								<div className="circle" />
							</div>
						</li>
						<li
							onClick={() => {
								data.current.Subject = 'Physic';
								pending(true);
							}}
							className="cursor-pointer w-full h-fit rounded-full bg-[#555]">
							<div className="relative w-full h-auto pl-5 pr-12 py-2 flex justify-center items-center circle-container">
								<p>Lý</p>
								<div className="circle" />
							</div>
						</li>
						<li
							onClick={() => {
								data.current.Subject = 'Chemical';
								pending(true);
							}}
							className="cursor-pointer w-full h-fit rounded-full bg-[#555]">
							<div className="relative w-full h-auto pl-5 pr-12 py-2 flex justify-center items-center circle-container">
								<p>Hóa</p>
								<div className="circle" />
							</div>
						</li>
					</div>
				</ul>
			</li>
		</ul>
	);
}

function Fallback() {
	return (
		<div
			className={`flex gap-x-2 absolute w-fit h-fit text-white p-2 ${Color.normal.background} rounded-b-xl`}>
			<p>Đợi chúng tớ chút xíu nhé</p>
			<div className="[&]:w-[25px] [&]:p-[5px] fallback"></div>
		</div>
	);
}

async function Result(props: { data: Omit<BookLink, 'url' | 'Author'> }) {
	const result = await fetchAllAuthorLinks(props.data);
	const CD = result[0];
	const KNTT = result[1];
	const CTST = result[2];

	const BookName = ['Sách giáo khoa môn', 'Giải sách giáo khoa môn', 'SBT môn', 'Giải SBT môn'];
	let SubjectName = '';

	switch (props.data.Subject) {
		case 'Math': {
			SubjectName = 'Toán';
			break;
		}
		case 'Physic': {
			SubjectName = 'Lý';
			break;
		}
		case 'Chemical': {
			SubjectName = 'Hóa';
			break;
		}
	}

	return (
		<div
			className={`childClass-[.links_container]:flex 
						childClass-[.links_container]:flex-col 
						childClass-[.links_container]:items-center 
						childClass-[.links_container]:px-[3rem] 
						childClass-[.author]:font-bold 
						childClass-[.author]:text-2xl 
						childClass-[.author]:pb-5 
						childClass-[.author]:text-white 
						rounded-lg bg-white/25 absolute w-fit h-fit select-none flex justify-items-center mt-5 py-5 backdrop-blur-sm border-x-2 border-b-2 border-solid border-white/50
						after:content-['']
						after:absolute
						after:w-fit
						after:h-fit
						after:bottom-full
						after:left-[20px]
						after:border-solid
						after:border-x-[8px]
						after:border-x-transparent
						after:border-b-[10px]
						after:border-b-white/25
						`}>
			<div className="links_container">
				<p className="author">Cánh diều</p>
				<div className="childClass-[a]:transition-colors childClass-[a]:text-black hover:childClass-[a]:text-white flex flex-col gap-y-3 items-center">
					{CD.map((e, i) => {
						return (
							<Link key={e} target="_blank" className={`${Carlito.bold.className}`} href={e}>
								{BookName[i]} {SubjectName} {props.data.Grade}
							</Link>
						);
					})}
				</div>
			</div>
			<div className="links_container">
				<p className="author">Kết nối tri thức</p>
				<div className="childClass-[a]:transition-colors childClass-[a]:text-black hover:childClass-[a]:text-white flex flex-col gap-y-3 items-center">
					{KNTT.map((e, i) => {
						console.log(e);
						return (
							<Link key={e} target="_blank" className={` ${Carlito.bold.className}`} href={e}>
								{BookName[i]} {SubjectName} {props.data.Grade}
							</Link>
						);
					})}
				</div>
			</div>
			<div className="links_container">
				<p className="author">Chân trời sáng tạo</p>
				<div className="childClass-[a]:transition-colors childClass-[a]:text-black hover:childClass-[a]:text-white flex flex-col gap-y-3 items-center">
					{CTST.map((e, i) => {
						return (
							<Link key={e} target="_blank" className={` ${Carlito.bold.className}`} href={e}>
								{BookName[i]} {SubjectName} {props.data.Grade}
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default function Study() {
	const data = useRef<Omit<BookLink, 'url' | 'Author'>>({
		Grade: 10,
		Subject: 'Math',
	});
	const [isPending, setPendingState] = useState(false);

	return (
		<div
			className={clsx('z-10 w-full h-full border-solid border-white/25', {
				'relative border-b-2 hover:border-0 group/drop hover:bg-white/25': !isPending,
				'border-0 bg-white/25': isPending,
			})}>
			<button
				onClick={() => {
					if (isPending) setPendingState(false);
				}}
				className={`group-hover/drop:border-x-2 border-white/25 border-solid cursor-pointer relative w-full h-full flex justify-center items-center gap-x-2`}>
				<p className="w-fit h-fit text-white text-2xl font-bold">Học tập</p>
				<Image alt="Study Image" src={Book} className="w-auto h-1/2 object-contain" />
			</button>
			{!isPending && <SelectionComponent pending={setPendingState} data={data} />}
			{isPending && (
				<Suspense fallback={<Fallback />}>
					<Result data={data.current} />
				</Suspense>
			)}
		</div>
	);
}
