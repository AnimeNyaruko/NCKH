'use client';

import Image from 'next/image';
import { Suspense } from 'react';

import CommunityIMG from '@/public/images/communicator.png';
import LOGO from '@/public/images/icon.svg';

import Search from '@/app/ui/Home Page/searchbar';
import Study from './(Study Section)/study';
import Community from './(Community Section)/community';

import { PaytoneOne } from '@/app/ui/Style/font';

import { Color } from './color.config';

export default function Page() {
	return (
		<div className="w-screen h-screen">
			<div
				className={`h-[10vh] w-screen ${Color.normal.background} flex justify-between items-center px-5`}>
				<p style={PaytoneOne.style} className="text-5xl text-white">
					iLearn
				</p>
				<Study />
				<Community />
			</div>
		</div>
	);
}
