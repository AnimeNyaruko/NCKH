'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useCallback } from 'react';
import Book from '@/public/images/book.svg';
import Tool from '@/public/images/tools.svg';
import ObjectSelection from '@/app/ui/Buttons/ObjectSelection';

//Define Author Selections for selecting book's set from an author.

export default function Page() {
	//Check what grade are selected to display the appropriate list of authors
	const GradeSelected = useRef(0);
	const SubjectSelected = useRef('');
	//Set the appropriate content to display
	const [content, setContent] = useState(<></>);

	//Define a function accept Grade and Subject to display correct set of authors' book
	const AuthorSelection = useCallback(() => {
		return (
			<div>
				<div className="my-10 grid grid-cols-3 gap-10 px-24">
					<div className="">
						<div className="mb-12 rounded-2xl border-[1px] border-solid border-black px-5 py-5 text-center font-bold">
							Kết nối tri thức
						</div>
						<div className="grid grid-rows-2 items-center justify-center border-black">
							<div className="text-lg font-semibold flex w-fit flex-col items-center justify-center gap-y-1">
								
							</div>
							<hr className="w-[inherit] border-[1px] border-solid border-black" />
							<div className="text-lg font-semibold flex w-fit flex-col items-center justify-center gap-y-1">
								<a href="/">Sách giáo khoa Toán 10</a>
								<a href="/">Giải sách giáo khoa Toán 10</a>
							</div>
						</div>
					</div>
					<div className="">
						<div className="mb-12 rounded-2xl border-[1px] border-solid border-black px-5 py-5 text-center font-bold">
							Chân trời sáng tạo
						</div>
						<div className="grid grid-rows-2 items-center justify-center border-black">
							<div className="text-lg font-semibold flex w-fit flex-col items-center justify-center gap-y-1">
								
							</div>
							<hr className="w-[inherit] border-[1px] border-solid border-black" />
							<div className="text-lg font-semibold flex w-fit flex-col items-center justify-center gap-y-1">
								<a href="/">Sách giáo khoa Toán 10</a>
								<a href="/">Giải sách giáo khoa Toán 10</a>
							</div>
						</div>
					</div>
					<div className="">
						<div className="mb-12 rounded-2xl border-[1px] border-solid border-black px-5 py-5 text-center font-bold">
							Cánh diều
						</div>
						<div className="grid grid-rows-2 items-center justify-center border-black">
							<div className="text-lg font-semibold flex w-fit flex-col items-center justify-center gap-y-1">
								
							</div>
							<hr className="w-[inherit] border-[1px] border-solid border-black" />
							<div className="text-lg font-semibold flex w-fit flex-col items-center justify-center gap-y-1">
								<a href="/">Sách giáo khoa Toán 10</a>
								<a href="/">Giải sách giáo khoa Toán 10</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}, [SubjectSelected]);

	//Define Grade Selection between grade 10, grade 11, grade 12
	const GradeSelections = (
		<div className=" flex flex-col gap-5 items-center justify-center">
			<ObjectSelection
				className="relative [&]:w-fit [&]:h-fit flex items-center mr-[0.5rem]"
				fontClass="text-[30px]"
				text="Lớp 10"
				direction="right"
				onClick={() => (GradeSelected.current = 0)}
			/>
			<ObjectSelection
				className="relative [&]:w-fit [&]:h-fit flex items-center mr-[0.5rem]"
				fontClass="text-[30px]"
				text="Lớp 11"
				direction="right"
				onClick={() => (GradeSelected.current = 1)}
			/>
			<ObjectSelection
				className="relative [&]:w-fit [&]:h-fit flex items-center mr-[0.5rem]"
				fontClass="text-[30px]"
				text="Lớp 12"
				direction="right"
				onClick={() => (GradeSelected.current = 2)}
			/>
		</div>
	);
	const Grade10 = (
		<div>
			<div className=" flex flex-col gap-5 items-center justify-center">
				<ObjectSelection
					className="relative [&]:w-fit [&]:h-fit flex items-center mr-[0.5rem]"
					fontClass="text-[30px]"
					text="Môn Toán"
					direction="right"
					onClick={() => (SubjectSelected.current = 'Math')}
				/>
				<ObjectSelection
					className="relative [&]:w-fit [&]:h-fit flex items-center mr-[0.5rem]"
					fontClass="text-[30px]"
					text="Môn Lý"
					direction="right"
					onClick={() => (SubjectSelected.current = 'Physic')}
				/>
				<ObjectSelection
					className="relative [&]:w-fit [&]:h-fit flex items-center mr-[0.5rem]"
					fontClass="text-[30px]"
					text="Môn Hóa"
					direction="right"
					onClick={() => (SubjectSelected.current = 'Chemical')}
				/>
			</div>
		</div>
	);

	return (
		<main>
			<div className="grid grid-cols-[repeat(24,1fr)] grid-rows-[10vh] w-screen bg-[#3a86ff]">
				<div className="flex justify-center items-center h-full w-full col-start-[1] col-end-[6]">
					<Link href="/home" className="h-fit w-fit paytone-one text-white text-[45px] font-bold">
						iLearn
					</Link>
				</div>
				<div className="relative flex justify-center items-center h-full w-full col-start-[6] col-end-[11] ">
					<ObjectSelection
						className="select-none relative [&]:w-fit [&]:h-fit flex items-center mr-[0.5rem]"
						fontClass="text-[30px]"
						text="Học tập"
						direction="bottom">
						<div className=" bg-[#3a86ff] rounded-b-2xl border-solid border-black border-x-[5px] border-b-[5px]">
							{content}
						</div>
					</ObjectSelection>
					<Image
						src={Book}
						alt="Book Icon"
						className="relative block w-auto h-[40%] object-contain ml-[0.5rem] cursor-pointer"
					/>
				</div>
				<div className="relative flex justify-center items-center h-full w-full col-start-[11] col-end-[16] ">
					<ObjectSelection
						className="relative [&]:w-fit [&]:h-fit flex items-center mr-[0.5rem]"
						fontClass="text-[30px]"
						text="Tiện ích"
						direction="bottom"
					/>
					<Image
						src={Tool}
						alt="Book Icon"
						className="relative block w-auto h-[40%] object-contain ml-[0.5rem] cursor-pointer"
					/>
				</div>
				<div className="h-full w-full col-start-[11] col-end-[16]"></div>
				<div className="h-full w-full col-start-[16] col-end-[23]"></div>
				<div className="h-full w-full col-start-[23] col-end-[24]"></div>
			</div>
		</main>
	);
}
