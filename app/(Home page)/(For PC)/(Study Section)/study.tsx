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
import Book from '@/public/images/book.png';
import { BookLink } from '@/app/lib/definations';
import { fetchAllAuthorLinks } from '@/app/lib/actions';
import Link from 'next/link';

import { Carlito } from '@/app/ui/Style/font';

function SelectionComponent(props: {
	pending: Dispatch<SetStateAction<boolean>>;
	data: MutableRefObject<Omit<BookLink, 'url' | 'Author'>>;
}) {
	const { pending, data } = props;
	return (
		<ul className="bg-inherit group-hover/drop:flex hidden absolute top-full w-full flex-col gap-y-5 py-3">
			<li
				onMouseEnter={() => {
					data.current.Grade = 10;
				}}
				id="Lớp 10"
				className="bg-inherit group/drop1 p-3 flex items-center relative">
				<p className="transition-all group-hover/drop1:text-white font-bold text-xl w-full px-5">
					Lớp 10
				</p>
				<FontAwesomeIcon
					className="transition-all group-hover/drop1:text-white group-hover/drop1:rotate-180 left-full"
					icon={faCaretLeft}
				/>
				<div className="bg-inherit absolute left-full h-full">
					<ul className="bg-inherit group-hover/drop1:flex hidden flex-col h-fit gap-y-8 py-3 px-5 pb-6">
						<li
							onClick={() => {
								data.current.Subject = 'Math';
								pending(true);
							}}
							id="Môn toán"
							className="transition-colors hover:text-white px-3 block relative text-xl font-bold">
							Toán
						</li>
						<li
							onClick={() => {
								data.current.Subject = 'Physic';
								pending(true);
							}}
							id="Môn Lý"
							className="transition-colors hover:text-white p-3 block relative text-xl font-bold">
							Lý
						</li>
						<li
							onClick={() => {
								data.current.Subject = 'Chemical';
								pending(true);
							}}
							id="Môn hóa"
							className="transition-colors hover:text-white px-3 block relative text-xl font-bold">
							Hóa
						</li>
					</ul>
				</div>
			</li>
			<li
				onMouseEnter={() => {
					data.current.Grade = 11;
				}}
				id="Lớp 11"
				className="bg-inherit group/drop1 p-3 flex items-center relative">
				<p className="transition-colors group-hover/drop1:text-white font-bold text-xl w-full px-5">
					Lớp 11
				</p>
				<FontAwesomeIcon
					className="transition-all group-hover/drop1:text-white group-hover/drop1:rotate-180 left-full"
					icon={faCaretLeft}
				/>
				<div className="bg-inherit absolute left-full h-full">
					<ul className="bg-inherit group-hover/drop1:flex hidden flex-col h-fit gap-y-8 py-3 px-5">
						<li
							onClick={() => {
								data.current.Subject = 'Math';
								pending(true);
							}}
							id="Môn toán"
							className="transition-colors hover:text-white px-3 block relative text-xl font-bold">
							Toán
						</li>
						<li
							onClick={() => {
								data.current.Subject = 'Physic';
								pending(true);
							}}
							id="Môn Lý"
							className="transition-colors hover:text-white p-3 block relative text-xl font-bold">
							Lý
						</li>
						<li
							onClick={() => {
								data.current.Subject = 'Chemical';
								pending(true);
							}}
							id="Môn hóa"
							className="transition-colors hover:text-white px-3 block relative text-xl font-bold">
							Hóa
						</li>
					</ul>
				</div>
			</li>
			<li
				onMouseEnter={() => {
					data.current.Grade = 12;
				}}
				id="Lớp 12"
				className="bg-inherit group/drop1 p-3 flex items-center relative">
				<p className="transition-colors group-hover/drop1:text-white font-bold text-xl w-full px-5">
					Lớp 12
				</p>
				<FontAwesomeIcon
					className="transition-all group-hover/drop1:text-white group-hover/drop1:rotate-180 left-full"
					icon={faCaretLeft}
				/>
				<div className="bg-inherit absolute left-full h-full">
					<ul className="bg-inherit group-hover/drop1:flex hidden flex-col h-fit gap-y-8 py-3 px-5">
						<li
							onClick={() => {
								data.current.Subject = 'Math';
								pending(true);
							}}
							id="Môn toán"
							className="transition-colors hover:text-white px-3 block relative text-xl font-bold">
							Toán
						</li>
						<li
							onClick={() => {
								data.current.Subject = 'Physic';
								pending(true);
							}}
							id="Môn Lý"
							className="transition-colors hover:text-white p-3 block relative text-xl font-bold">
							Lý
						</li>
						<li
							onClick={() => {
								data.current.Subject = 'Chemical';
								pending(true);
							}}
							id="Môn hóa"
							className="transition-colors hover:text-white px-3 block relative text-xl font-bold">
							Hóa
						</li>
					</ul>
				</div>
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
						rounded-lg rounded-t-none ${Color.normal.background} absolute w-fit h-fit select-none flex justify-items-center py-5`}>
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
		<div className={`w-full h-full`}>
			<button
				onClick={() => {
					if (isPending) setPendingState(false);
				}}
				className={`${Color.transition} ${Color.interact.hover.background} group/drop relative w-full h-full flex justify-center items-center gap-x-2 cursor-pointer`}>
				<p className="w-fit h-fit text-white text-2xl font-bold">Học tập</p>
				<Image alt="Study Image" src={Book} className="w-auto h-1/2 object-contain" />
				{!isPending && <SelectionComponent pending={setPendingState} data={data} />}
			</button>
			{isPending && (
				<Suspense fallback={<Fallback />}>
					<Result data={data.current} />
				</Suspense>
			)}
		</div>
	);
}
