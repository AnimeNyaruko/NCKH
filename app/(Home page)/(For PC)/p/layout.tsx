'use client';

import Image from 'next/image';
import { Suspense } from 'react';

import LOGO from '@/public/images/icon.svg';
import bg from '@/public/images/background.png';

import Search from '@/app/ui/Home Page/searchbar';
import Study from './(Study Section)/study';
import Community from './(Community Section)/community';

import { PaytoneOne } from '@/app/ui/Style/font';

import { Color } from './color.config';
import Link from 'next/link';

export default function Page({ children }: { children: React.ReactNode }) {
	return (
		<div className="overflow-hidden relative w-screen h-screen flex flex-col">
			<Image
				src={bg}
				alt="Main page background"
				className="absolute -z-[1] w-[105%] h-[105%] object-fill brightness-50"
			/>
			<div className={`z-[100] relative h-[10vh] w-screen flex justify-between items-center px-5 `}>
				<div className="w-fit h-full flex items-center justify-center px-5 border-b-2 border-solid border-white/25">
					<Link
						href="/p"
						style={PaytoneOne.style}
						className="text-5xl text-white drop-shadow-white">
						iLearn
					</Link>
				</div>

				<Study />
				<Community />
			</div>
			{children}
		</div>
	);
}
