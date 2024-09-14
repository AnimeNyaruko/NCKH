'use client';

import { Suspense, useEffect, useState } from 'react';
import Display from './display';

function DisplayPoster() {
	const [ReRender, setRender] = useState<boolean>(false);

	useEffect(() => {
		setTimeout(() => {
			setRender(!ReRender);
		}, 300000);
	}, [ReRender]);

	return <Display />;
}

function Fallback() {
	function Component(props: { pos: 1 | 2 | 3 | 4 }) {
		const Position = {
			1: '[animation-delay:0s]',
			2: '[animation-delay:375ms]',
			3: '[animation-delay:750ms]',
			4: '[animation-delay:1125ms]',
		};

		return (
			<div
				className={`animate-pulse poster ${
					Position[props.pos]
				} rounded-lg px-2 py-3 bg-slate-200/50`}>
				<p className="title"></p>
				<div className="w-full h-fit flex justify-center p-2 bg-white/50 rounded-lg">
					<div className="w-3/4 aspect-[3/4] bg-gray-400 rounded-lg" />
				</div>
			</div>
		);
	}
	return (
		<>
			<Component pos={1} />
			<Component pos={2} />
			<Component pos={3} />
			<Component pos={4} />
		</>
	);
}

export default function Article({ render }: { render: any }) {
	return (
		<div className="relative w-full h-full p-8 grid auto-rows-min grid-cols-[repeat(4,1fr)] gap-5 overflow-y-auto">
			<Suspense fallback={<Fallback />}>
				<DisplayPoster />
			</Suspense>
		</div>
	);
}
