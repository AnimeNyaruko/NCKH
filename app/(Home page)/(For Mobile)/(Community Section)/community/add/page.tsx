'use client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

import Image from 'next/image';
import ImagePicture from '@/public/images/ImagePicture.png';
import LinkPicture from '@/public/images/LinkPicture.png';

import { MavenPro } from '@/app/ui/Style/font';

export default function Page() {
	return (
		<div className="mx-3 mt-2">
			<div className="flex justify-between">
				<FontAwesomeIcon className="" icon={faX} size="lg" fixedWidth />
				<p className="text-xl text-blue-500" style={MavenPro.bold.style}>
					Đăng
				</p>
			</div>
			<form className="mt-3" action="">
				<input
					placeholder="TIÊU ĐỀ"
					style={MavenPro.bold.style}
					className="w-full text-2xl opacity-35"
				/>
			</form>
			<hr className="border border-black opacity-35" />
			<div className="mt-3 flex justify-end w-full h-fit">
				<label className="flex gap-x-3 w-[20%] h-auto">
					<div>
						<Image alt="ImageIcon" src={ImagePicture} className="object-contain w-full h-full" />
						<input type="file" accept="image/*" alt="" className="hidden" />
					</div>
					<div>
						<Image alt="LinkIcon" src={LinkPicture} className="object-contain w-full h-full" />
						<input type="url" alt="" className="hidden" />
					</div>
				</label>
			</div>
		</div>
	);
}
