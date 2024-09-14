'use client';

import Bot from '@/public/images/chatbot.png';
import logo from '@/app/icon3.png';
import PlusIcon from '@/public/images/plus.png';

import { Suspense, useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import DisplayPost from './(ui)/DisplayPost';
import Loading from './(ui)/loading';
import { PaytoneOne } from '@/app/ui/Style/font';

export default function Page() {
	const [init, setInit] = useState(false);

	useEffect(() => {
		setInit(true);
	}, []);

	const path = usePathname();
	return (
		<>
			<div className="w-full h-fit">
				<header className="top-0 w-full h-[10vh]">
					<div className="grid grid-cols-2 grid-rows-1 items-center h-full">
						<div className="w-fit h-[75%] aspect-square my-2 ml-2 select-none">
							<Image
								src={logo}
								alt="Music Icon"
								className="text-white w-min h-min p-2 object-contain"
							/>
						</div>
						<div className="w-full h-fit flex justify-center items-center">
							<p style={PaytoneOne.style} className="text-white text-2xl drop-shadow-white-lg">
								Diễn đàn
							</p>
						</div>
					</div>
					<hr className="top-0 border-1 border-white" />
				</header>
				<main className="grid grid-cols-2 grid-rows-1 gap-x-2 py-5 px-2 h-fit overflow-y-scroll">
					{init && (
						// <Loading />
						<Suspense fallback={<Loading />}>
							<DisplayPost />
						</Suspense>
					)}
				</main>
				<Link
					href={`${path}/chatgpt`}
					className="fixed right-5 bottom-[2.5dvh] mb-2 w-[15%] select-none">
					<div id="chatbot" className="w-full aspect-square bg-blue-400 rounded-full">
						<Image src={Bot} alt="Chat bot" className="w-full h-full p-3 object-contain" />
					</div>
				</Link>
				<Link
					href={`${path}/add`}
					className="fixed left-5 bottom-[2.5dvh] mb-2 w-[15%] h-fit select-none">
					<div id="chatbot" className="w-full aspect-square bg-blue-400 rounded-full">
						<Image src={PlusIcon} alt="Add artical" className="w-full h-full p-3 object-contain" />
					</div>
				</Link>
			</div>
		</>
	);
}
