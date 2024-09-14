'use client';

import Image from 'next/image';

export default function DisplayImage(props: { src: string; width: number; height: number }) {
	const { src, width, height } = props;

	return (
		<Image
			alt={''}
			src={src}
			width={width}
			height={height}
			className="object-contain w-3/4 h-auto"
		/>
	);
}
