'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import bg from '@/public/images/background.png';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Page(req: any) {
	const [urlArr, setURLArr] = useState<Array<any>>([]);
	const path = usePathname();

	const router = useRouter();

	useEffect(() => {
		fetch(`${path}/api`, { method: 'GET' })
			.then((res) => res.json())
			.then((data) => {
				setURLArr(data);
			});
	}, [path]);

	return (
		<div
			style={{
				backgroundImage: `url(${bg.src})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
			className="relative w-screen h-screen flex flex-col justify-center items-center gap-y-12">
			<div className="absolute top-5 left-5 text-2xl text-white">
				<FontAwesomeIcon
					className="cursor-pointer"
					onClick={() => {
						router.back();
					}}
					icon={faArrowLeft}
					fixedWidth
				/>
			</div>
			{urlArr.map((e: any, i: number) => {
				return e.url != '#' ? (
					<Link
						className="font-bold p-5 rounded-full border-solid border-white/50 border-4 bg-cyan-300 hover:bg-cyan-600"
						target="_blank"
						href={e.url}
						key={e.url}>
						{e.title + ` tập ${i + 1}`}
					</Link>
				) : (
					<div
						className="font-bold p-5 rounded-full border-solid border-white/50 border-4 bg-cyan-600"
						key={e.url}>
						{e.title}
					</div>
				);
			})}
		</div>
	);
}
