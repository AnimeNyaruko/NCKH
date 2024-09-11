'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import temp from '@/public/images/ChemicalIcon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

export default function Poster(props: {
	title: string;
	src: string;
	width: number;
	height: number;
}) {
	const { title, src, width, height } = props;
	if (!width) return;

	return (
		<div className="poster rounded-lg px-2 py-3 bg-slate-200/50">
			<div className="title">
				<p>{title}</p>
				<FontAwesomeIcon icon={faEllipsis} className="pr-2" />
			</div>
			<div className="w-full h-fit flex justify-center p-2 bg-white/50 rounded-lg">
				<Image
					alt={title}
					src={src}
					width={width}
					height={height}
					className="object-contain w-3/4 h-auto"
				/>
			</div>
		</div>
	);
}
