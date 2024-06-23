import Image from 'next/image';
import Link from 'next/link';
import Book from '@/public/images/book.svg';
import Tool from '@/public/images/tools.svg';
import ObjectSelection from '@/app/ui/Buttons/ObjectSelection';

export default function Page() {
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
						className="relative [&]:w-fit [&]:h-fit flex items-center mr-[0.5rem]"
						fontClass="text-[30px]"
						text="Học tập"
						direction="bottom"
					/>
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
