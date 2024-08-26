'use client';

import { faBars, faPlus, faRobot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

import { useState } from 'react';

export default function Page() {
	const [isDisplay, setDisplay] = useState(false);

	return (
		<div className="">
			<div className="w-full flex flex-col h-full items-center">
				<div
					onClick={() => {
						setDisplay(!isDisplay);
					}}
					className={clsx(
						'cursor-pointer rounded-t-[100%] z-0 bg-cyan-500 w-fit aspect-square flex items-center justify-center',
						{
							'[transition:border-bottom-left-radius_linear_150ms,border-bottom-right-radius_linear_150ms] rounded-b-[20%] text-white':
								isDisplay,
							'[transition:border-bottom-left-radius_linear_150ms_150ms,border-bottom-right-radius_linear_150ms_150ms] rounded-b-[100%] text-black':
								!isDisplay,
						}
					)}>
					<FontAwesomeIcon icon={faBars} className="p-3" fixedWidth />
				</div>
				<div
					className={clsx(
						'flex flex-col gap-y-2 overflow-hidden  -z-[1] bg-cyan-300 rounded-b-full w-fit',
						{
							'[transition:max-height_150ms_cubic-bezier(0,0,.5,1)_150ms] max-h-[100px]': isDisplay,
							'[transition:max-height_150ms_cubic-bezier(0,0,.5,1)_0ms] max-h-0': !isDisplay,
						}
					)}>
					<FontAwesomeIcon icon={faRobot} className="px-2 pt-2" fixedWidth />
					<FontAwesomeIcon icon={faPlus} className="px-2 pb-3" fixedWidth />
				</div>
			</div>
		</div>
	);
}
