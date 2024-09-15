'use client';

import { useState } from 'react';

import { faDownload, faEllipsis, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'react-share';

import { imageSize } from '@/app/lib/utils';
import Image from 'next/image';

export default function DisplayShare(props: {
	title: string;
	src: string;
	width: number;
	height: number;
}) {
	const { title, src, width, height } = props;

	const [show, setShow] = useState<boolean>(false);

	return (
		<>
			<FontAwesomeIcon
				onClick={() => {
					setShow(true);
				}}
				icon={faEllipsis}
				className="pr-2"
				fixedWidth
			/>
			{show && (
				<div className="z-[9] fixed top-0 right-0 left-0 w-screen h-screen bg-black/75 backdrop-blur-sm flex justify-center items-center">
					<div className="z-10 relative w-1/4 h-1/2 bg-white rounded-2xl flex flex-col justify-center items-center gap-y-5">
						<FontAwesomeIcon
							onClick={() => {
								setShow(false);
							}}
							className="absolute top-5 right-5 text-xl text-gray-400 hover:text-red-700 transition-colors"
							icon={faX}
						/>
						<FacebookShareButton url="https://ilearn247.vercel.app/p/community">
							<FacebookIcon className="rounded-full" />
						</FacebookShareButton>
						<TwitterShareButton url="https://ilearn247.vercel.app/p/community">
							<TwitterIcon className="rounded-full" />
						</TwitterShareButton>
						<div
							onClick={(e) => {
								try {
									fetch(e.currentTarget.children[0].src, { cache: 'no-store' })
										.then((res) => res.blob())
										.then((data) => {
											// console.log(typeof data);
											imageSize(data).then((img: any) => {
												const a = document.createElement('a');
												a.href = img.src;
												a.download = title + '.png';
												a.click();
											});
										});
								} catch {}
							}}
							id="Download"
							className="w-[67.5%] flex justify-center items-center text-white text-3xl aspect-square rounded-full bg-blue-500">
							<Image alt="" src={src} width={width} height={height} className="hidden" />
							<FontAwesomeIcon icon={faDownload} fixedWidth />
						</div>
					</div>
				</div>
			)}
		</>
	);
}
