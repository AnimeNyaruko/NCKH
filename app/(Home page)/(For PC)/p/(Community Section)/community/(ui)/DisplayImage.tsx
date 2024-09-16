'use client';

import Image from 'next/image';

import { useState } from 'react';

export default function DisplayImage(props: { src: string; width: number; height: number }) {
	const { src, width, height } = props;

	const [show, setShow] = useState<boolean>(false);

	return (
		<>
			<Image
				onClick={() => {
					setShow(true);
				}}
				alt=""
				src={src}
				width={width}
				height={height}
				className="object-contain w-3/4 h-auto cursor-pointer select-none"
			/>
			{/* <Image
				onClick={() => {
					setShow(true);
				}}
				alt=""
				src={logo}
				className="object-contain w-3/4 h-auto cursor-pointer select-none"
			/> */}
			{show && (
				<div
					onClick={() => {
						setShow(false);
					}}
					className="z-[1000] fixed flex justify-center items-center right-0 left-0 top-0 w-full h-dvh bg-black/75 backdrop-blur-sm">
					<Image
						alt=""
						src={src}
						width={width}
						height={height}
						className="object-contain w-1/4 h-auto"
					/>
					{/* <Image
						onClick={() => {
							setShow(true);
						}}
						alt=""
						src={logo}
						className="object-contain w-3/4 h-auto cursor-pointer select-none"
					/> */}
				</div>
			)}
		</>
	);
}
