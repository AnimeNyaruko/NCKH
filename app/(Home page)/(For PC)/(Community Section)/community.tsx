'use client';

import clsx from 'clsx';
import { Color } from '../color.config';
import { useState } from 'react';

export default function Study() {
	const [isClicked, setClick] = useState(false);

	return (
		<div
			className={`group ${Color.transition} ${Color.interact.hover.background} w-full h-full cursor-pointer`}>
			<p className="w-fit h-full flex items-center justify-center">Diễn đàn</p>
			<a href="#" className="group-hover:block hidden absolute" />
		</div>
	);
}
