import Image from 'next/image';

import Gray from '@/public/images/graybg.jpg';

export default function Loading() {
	function Component(props: { pos: 1 | 2 | 3 }) {
		const { pos } = props;
		const position = {
			1: '[animation-delay:0s]',
			2: '[animation-delay:500ms]',
			3: '[animation-delay:1000ms]',
		};

		return (
			<div
				className={`animate-pulse ${position[pos]} grid grid-cols-1 grid-rows-[25px_1fr] bg-slate-200 rounded-md w-full`}>
				<div className="grid grid-cols-[85%_15%] grid-rows-[25px] items-center px-2 max-w-full">
					<p className="truncate font-bold text-sm"></p>
				</div>
				<div className="py-3">
					<Image alt="" src={Gray} className="opacity-50 w-3/4 aspect-[3/4] mx-auto" />
				</div>
			</div>
		);
	}

	return (
		<>
			<div id="left" className="flex flex-col gap-y-3 items-center h-fit">
				<Component pos={2} />
				<Component pos={1} />
				<Component pos={3} />
			</div>
			<div id="right" className="flex flex-col gap-y-3 items-center h-fit">
				<Component pos={1} />
				<Component pos={3} />
				<Component pos={2} />
			</div>
		</>
	);
}
