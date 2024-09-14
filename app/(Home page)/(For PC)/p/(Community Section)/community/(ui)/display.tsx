import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

import DisplayImage from './DisplayImage';
import { Dispatch } from 'react';

function Poster(props: { key: any; title: string; src: string; width: number; height: number }) {
	const { title, src, width, height } = props;
	return (
		<div key={title} className="poster rounded-lg px-2 py-3 bg-slate-200/50">
			<div className="title">
				<p>{title}</p>
				<FontAwesomeIcon icon={faEllipsis} className="pr-2" />
			</div>
			<div className="w-full h-fit flex justify-center p-2 bg-white/50 rounded-lg">
				<DisplayImage src={src} width={width} height={height} />
			</div>
		</div>
	);
}

export default async function Display() {
	try {
		const data = await fetch(`/api/community`, { method: 'GET' }).then((res) => res.json());

		return (
			<>
				{data.map((e: any) => {
					return (
						<Poster key={e.title} title={e.title} src={e.src} width={e.width} height={e.height} />
					);
				})}
			</>
		);
	} catch {}
}
