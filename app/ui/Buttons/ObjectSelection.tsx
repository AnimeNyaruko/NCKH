'use client';

import { useState } from 'react';

export default function ObjectSelection({
	text,
	direction,
	className = '',
	fontClass = '',
	children,
	...rest
}: {
	text: string;
	direction: 'top' | 'bottom' | 'left' | 'right';
	children?: React.ReactNode;
	className?: string | object;
	fontClass?: string | object;
}) {
	const [show, setShow] = useState(0);
	return (
		<div className={`w-full h-full cursor-pointer ${className} `} {...rest}>
			<div className="w-fit h-fit flex justify-center items-center">
				<p className={`relative text-white text-[45px] roboto font-bold ${fontClass} `}>{text}</p>
			</div>
			{show ? <div className={`absolute w-fit h-fit ${direction}-full`}>{children}</div> : null}
		</div>
	);
}
