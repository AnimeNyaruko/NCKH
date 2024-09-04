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
			className={`${Color.transition} ${Color.interact.hover.background} relative w-full h-full flex justify-center items-center gap-x-2 cursor-pointer`}>
			<p className="w-fit h-fit text-white text-2xl font-bold">Học tập</p>
			<Image alt="Study Image" src={CommunityIMG} className="w-auto h-1/2 object-contain" />
		</Link>
	);
}
