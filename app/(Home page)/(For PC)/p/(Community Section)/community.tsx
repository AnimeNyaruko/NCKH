'use client';

import { Color } from '../color.config';
import CommunityIMG from '@/public/images/communicator.png';

import clsx from 'clsx';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Study() {
	const [isClicked, setClick] = useState(false);

	return (
		<Link
			href="/p/community"
			className={`hover:bg-white/25 relative w-full h-full flex justify-center items-center gap-x-2 cursor-pointer border-b-2 border-solid border-white/25 hover:border-0`}>
			<p className="w-fit h-fit text-white text-2xl font-bold">Diễn đàn</p>
			<Image alt="Study Image" src={CommunityIMG} className="w-auto h-1/2 object-contain" />
		</Link>
	);
}
