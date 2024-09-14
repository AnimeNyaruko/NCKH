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
		<>
			<p className="font-bold text-black">
				Bạn sẽ được chuyển sang trang diễn đàn sau <br />{' '}
				<span className="text-red text-[1.15em] text-white">{timer}</span> giây
			</p>
		</>
	);
}
