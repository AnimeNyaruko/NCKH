'use client';

import clsx from 'clsx';
import { Color } from '../color.config';
import { useState } from 'react';

export default function Study() {
	const [isClicked, setClick] = useState(false);

	return (
		<button
			onFocus={() => {
				setClick(!isClicked);
			}}
			onMouseOver={() => {
				setClick(!isClicked);
			}}
			type="button"
			className={`h-full w-full ${Color.normal.background} ${Color.interact.hover.background} ${Color.interact.focus.background}`}>
			<div className="h-full flex items-center justify-center">
				<p className="font-bold text-3xl text-white">Học tập</p>
			</div>
			<ul
				className={clsx(
					'bg-inherit absolute overflow-hidden',
					isClicked && 'max-h-full',
					!isClicked && 'max-h-0'
				)}>
				<li>a</li>
				<li>b</li>
				<li>c</li>
			</ul>
		</button>
	);
}
