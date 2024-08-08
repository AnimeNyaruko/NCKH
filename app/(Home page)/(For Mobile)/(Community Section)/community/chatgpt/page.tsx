'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

import Link from 'next/link';
import { Suspense } from 'react';
import Image from 'next/image';

export default function Page() {
	return (
		<div className="h-screen">
			<header className="h-[10svh] w-screen">
				<div className="w-min h-full flex items-center">
					<Link
						href={'/community'}
						className="ml-2 top-1/2 w-min h-3/4 aspect-square rounded-full bg-blue-300 flex items-center justify-center">
						<FontAwesomeIcon
							icon={faArrowLeft}
							fixedWidth
							className="w-full h-3/4 text-[2.5em] p-1 text-white"
						/>
					</Link>
				</div>
				<hr className="border-black" />
			</header>
			<main className="h-[90svh] w-screen">
				<form
					action=""
					id="chat"
					className="absolute top-full -translate-y-full flex items-center justify-center w-screen bg-slate-200 h-[10%]">
					<div className="w-3/4">
						<input
							// onBlur={() => {
							// 	console.log('unfocus-ed');
							// }}
							className="px-3 py-2 w-full border border-slate-400 border-solid focus:border-black rounded-full outline-none"
							type="text"
							name="promt"
							id="ChatPromt"
							placeholder="Tin nhắn cho ChatGPT"
						/>
						<button
							type="submit"
							className="w-min h-max bg-blue-300 rounded-full aspect-square flex items-center justify-center absolute top-1/2 right-[2dvw] -translate-y-1/2">
							<FontAwesomeIcon
								className="p-2 text-white aspect-square"
								fixedWidth
								icon={faArrowUp}
							/>
						</button>
					</div>
				</form>
			</main>
		</div>
	);
}
