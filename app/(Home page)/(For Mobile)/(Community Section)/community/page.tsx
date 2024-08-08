'use client';

import Image from 'next/image';
import Bot from '@/public/images/chatbot.png';
import MusicIcon from '@/public/images/Music.png';
import PlusIcon from '@/public/images/plus.png';
import Search from '@/app/ui/Home Page/searchbar';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Page() {
	const path = usePathname();
	return (
		<main className="w-full h-[200vh]">
			<header className="sticky top-0 w-full h-[10vh]">
				<div className="grid grid-cols-2 grid-rows-1 items-center h-full">
					<div className="w-fit h-[75%] aspect-square bg-blue-400 rounded-full my-2 ml-2 select-none">
						<Image src={MusicIcon} alt="Music Icon" className="text-white w-min h-min p-2" />
					</div>
					<div className="w-full h-1/2 flex items-center">
						<Search width="w-full" height="h-auto" />
					</div>
				</div>
				<hr className="sticky top-0 border-[1%] border-black" />
			</header>
			<Link
				href={`${path}/chatgpt`}
				className="sticky float-right top-[90dvh] mb-2 mr-5 w-[15%] select-none">
				<div id="chatbot" className="w-full aspect-square bg-blue-400 rounded-full">
					<Image src={Bot} alt="Chat bot" className="w-full h-full p-3 object-contain" />
				</div>
			</Link>
			<Link
				href={`${path}/add`}
				className="sticky float-left top-[90dvh] mb-2 ml-5 w-[15%] h-fit select-none">
				<div id="chatbot" className="w-full aspect-square bg-blue-400 rounded-full">
					<Image src={PlusIcon} alt="Add artical" className="w-full h-full p-3 object-contain" />
				</div>
			</Link>
		</main>
	);
}
