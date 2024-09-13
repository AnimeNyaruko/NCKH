'use client';

import variables from '@/app/ui/Style/_defination.module.scss';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const bgColor = {
	normal: variables.colorCode,
	hover: variables.colorCodeHover,
};

export default function Utility() {
	const [timer, setTimer] = useState(3);
	const router = useRouter();

	if (timer == 0) router.push('/m/community');
	useEffect(() => {
		if (timer > 0) setTimeout(() => setTimer(timer - 1), 1000);
	}, [timer]);
	return (
		<div
			className={` grid grid-cols-1 grid-rows-1 gap-y-3 py-3 justify-items-center items-center w-screen h-fit bg-[${bgColor.normal}]`}>
			<p className="font-bold text-black">
				Bạn sẽ được chuyển sang trang diễn đàn sau <br />{' '}
				<span className="text-red text-[1.15em] text-white">{timer}</span> giây
			</p>
		</div>
	);
}
