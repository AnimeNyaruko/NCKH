'use client';

import { Dispatch, JSX, Suspense, useEffect, useState } from 'react';

import Menu from './(ui)/menu';
import Poster from './(ui)/poster';
import Add from './(ui)/add';

import logo from '@/app/icon3.png';

function fetchPoster(setPosterArray: Dispatch<any>) {
	fetch('/api/community', {
		cache: 'no-cache',
	})
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			const result: any = [];
			data.forEach((e: any, i: number, arr: Array<any>) => {
				result.push({
					title: e.title,
					src: e.src,
					width: e.width,
					height: e.height,
				});
			});
			console.log(result);
			setPosterArray(result);
		});
}

export default function Page() {
	const [PosterArray, setPosterArray] = useState<any>([null]);
	const [AddComp, setAddComp] = useState<any>(false);
	const [Init, setInit] = useState(true);

	useEffect(() => {
		if (Init) {
			fetchPoster(setPosterArray);
			setInit(false);
		} else {
			setInterval(() => {
				fetchPoster(setPosterArray);
			}, 300000);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<div className="relative w-full h-full p-8 grid auto-rows-min grid-cols-[repeat(4,1fr)] gap-5 overflow-y-auto">
				{PosterArray[0] &&
					PosterArray.map((e: any) => {
						return (
							<Poster key={e.title} title={e.title} src={e.src} width={e.width} height={e.height} />
						);
					})}
			</div>
			{AddComp && <Add setAddComp={setAddComp} />}
			<Menu setAddComp={setAddComp} />
		</>
	);
}
