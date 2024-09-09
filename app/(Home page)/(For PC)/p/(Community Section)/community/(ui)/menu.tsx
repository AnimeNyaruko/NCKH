'use client';

import { faBars, faPlus, faRobot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

import { useState } from 'react';

export default function Menu() {
	const [isDisplay, setDisplay] = useState(false);

	return (
		<div className="fixed bottom-10 right-10 [&_svg]:text-2xl">
			<div className="relative -z-[2] w-full flex flex-col items-center">
				<div
					className={clsx(
						'flex flex-col gap-y-2 overflow-hidden relative -z-[1] bg-cyan-300 rounded-t-full w-fit',
						{
							'[transition:max-height_150ms_cubic-bezier(0,0,.5,1)_150ms] max-h-[100px]': isDisplay,
							'[transition:max-height_150ms_cubic-bezier(0,0,.5,1)_0ms] max-h-0': !isDisplay,
						}
					)}>
					<FontAwesomeIcon
						icon={faRobot}
						className="relative z-[1] px-2 pt-2 transition-colors hover:cursor-pointer hover:text-slate-600"
						fixedWidth
					/>
					<FontAwesomeIcon
						icon={faPlus}
						className="relative z-[1] px-2 pb-2 transition-colors hover:cursor-pointer hover:text-emerald-600"
						fixedWidth
					/>
				</div>
				<div
					onClick={() => {
						setDisplay(!isDisplay);
					}}
					className={clsx(
						'cursor-pointer rounded-b-[100%] z-0 bg-cyan-500 w-fit aspect-square flex items-center justify-center',
						{
							'[transition:border-top-left-radius_linear_150ms,border-top-right-radius_linear_150ms] rounded-t-[20%] text-white':
								isDisplay,
							'[transition:border-top-left-radius_linear_150ms_150ms,border-top-right-radius_linear_150ms_150ms] rounded-t-[100%] text-black':
								!isDisplay,
						}
					)}>
					<FontAwesomeIcon icon={faBars} className="p-3" fixedWidth />
				</div>
			</div>
		</div>
	);
}
