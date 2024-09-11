'use client';

import Bot from '@/public/images/chatbot.png';
import logo from '@/app/icon3.png';
import PlusIcon from '@/public/images/plus.png';
import Search from '@/app/ui/Home Page/searchbar';

import { SetStateAction, useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

function CreatePost(props: { Title: string; src: string; width: number; height: number }) {
	return (
		<div className="grid grid-cols-1 grid-rows-[25px_1fr] bg-slate-200 rounded-md w-full">
			<div className="grid grid-cols-[85%_15%] grid-rows-[25px] items-center px-2 max-w-full">
				<p className="truncate font-bold text-sm">{props.Title}</p>
				<FontAwesomeIcon className="justify-self-end" icon={faEllipsis} fixedWidth />
			</div>
			<div className="py-3">
				<Image
					alt="Poster Images"
					width={props.width}
					height={props.height}
					src={props.src}
					className="w-3/4 mx-auto"
				/>
			</div>
		</div>
	);
}

export default function Page() {
	const [init, setInit] = useState(true);
	const [RightPost, setRPost] = useState<Array<any>>([]);
	const [LeftPost, setLPost] = useState<Array<any>>([]);

	useEffect(() => {
		if (init) {
			fetch('/api/community', { cache: 'no-cache' })
				.then((res) => res.json())
				.then((data: any) => {
					const LPost: any = [];
					const RPost: any = [];

					data.forEach((e: any, i: number) => {
						if (i % 2 == 0) {
							LPost.push(e);
						} else {
							RPost.push(e);
						}
					});
					setLPost(LPost);
					setRPost(RPost);

					setInit(false);
				});
		}
		// setInterval(() => {}, 300000);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const path = usePathname();
	return (
		<>
			<div className="w-full h-dvh">
				<header className="sticky top-0 w-full h-[10vh] bg-white">
					<div className="grid grid-cols-2 grid-rows-1 items-center h-full">
						<div className="w-fit h-[75%] aspect-square my-2 ml-2 select-none">
							<Image src={logo} alt="Music Icon" className="text-white w-min h-min p-2" />
						</div>
						<div className="w-full h-1/2 flex items-center">
							<Search width="w-full" height="h-auto" />
						</div>
					</div>
					<hr className="sticky top-0 border-[1%] border-black" />
				</header>
				<main className="grid grid-cols-2 grid-rows-1 py-5 h-fit overflow-y-scroll">
					<div className="flex flex-col gap-y-3 px-2 items-center h-fit">
						{LeftPost.map((e) => {
							return (
								<CreatePost
									key={e.title}
									Title={e.title}
									src={e.src}
									width={e.width}
									height={e.height}
								/>
							);
						})}
					</div>
					<div className="flex flex-col gap-y-3 px-2 items-center h-fit">
						{RightPost.map((e) => {
							return (
								<CreatePost
									key={e.title}
									Title={e.title}
									src={e.src}
									width={e.width}
									height={e.height}
								/>
							);
						})}
					</div>
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
