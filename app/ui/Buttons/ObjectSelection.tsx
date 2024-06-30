'use client';

import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

interface SelectionProp {
	text: string;
	direction: 'top' | 'bottom' | 'left' | 'right';
	className?: string;
	fontClass?: string;
	contentClass?: string;
	children?: React.ReactNode;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export default function ObjectSelection({
	text,
	direction,
	className = '',
	fontClass = '',
	contentClass = '',
	children,
	onClick,
	...restProps
}: SelectionProp) {
	direction = direction && direction == 'top' ? 'bottom' : 'top';

	const [isVisible, setIsVisible] = useState(false);

	const handleClick = () => setIsVisible(!isVisible);

	return (
		<>
			<div
				// onClick={handleClick}
				className={clsx(`${direction}-full w-full absolute block ${contentClass}`, {
					'!hidden': !isVisible,
				})}>
				{children}
			</div>
			<div
				className={`w-full h-full cursor-pointer ${className}`}
				{...restProps}
				onClick={handleClick}>
				<div className="w-fit h-fit flex justify-center items-center">
					<p className={`relative text-white text-[45px] roboto font-bold ${fontClass} `}>{text}</p>
				</div>
			</div>
		</>
	);
}
