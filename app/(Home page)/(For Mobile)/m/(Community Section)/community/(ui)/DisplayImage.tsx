'use client';

import Image from 'next/image';

export default function DisplayImage(props: { src: string; width: number; height: number }) {
	const { src, width, height } = props;
	return <Image alt="" src={src} width={width} height={height} className="w-3/4 mx-auto" />;
}
