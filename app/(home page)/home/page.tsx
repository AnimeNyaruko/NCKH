'use client';

import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { BookLink } from '@/app/lib/definations';
import { fetchAllAuthorLinks } from '@/app/lib/actions';
import { useState, useRef } from 'react';
import Book from '@/public/images/book.png';
import Tool from '@/public/images/tools.png';
import variables from '@/app/ui/Style/_defination.module.scss';

function TopSelection({ text, imgSrc }: { text: string; imgSrc: StaticImageData }) {
	return (
		<div className={`ursor-pointer h-full w-full relative flex items-center justify-center gap-2`}>
			<p className="text-[35px] text-white text-center paytone-one">{text}</p>
			<Image className="relative block h-[35%] w-auto mt-2" src={imgSrc} alt="Book Icon" />
		</div>
	);
}

export default function Page() {
	console.log(variables);
	const data: Omit<BookLink, 'Author'> = { Grade: 10, Subject: 'Math' };

	const [content, setContent] = useState([['']]);
	const [isGradeSelection, setGradeSelection] = useState(true);

	const fetchAuthor = async () => {
		const components = await fetchAllAuthorLinks(data);
		setContent(components);
	};

	const StudySelection = <div></div>;

	return (
		<main>
			<div
				className={`w-screen bg-[${colorCode}] grid grid-cols-[repeat(23,1fr)] grid-rows-[10vh] items-items-center justify-center`}>
				<div className="h-full w-full col-start-1 col-end-5 flex items-center justify-center text-white text-[35px] paytone-one">
					<Link href="/home">iLearn</Link>
				</div>
				<div className="h-full col-start-5 col-end-10">
					{TopSelection({ text: 'Học tập', imgSrc: Book })}
				</div>
				<div className="h-full col-start-10 col-end-[15]">
					{TopSelection({ text: 'Tiện ích', imgSrc: Tool })}
				</div>
			</div>
		</main>
	);
}
