import { unstable_noStore as noStore } from 'next/cache';

import DisplayImage from './DisplayImage';
import DisplayShare from './DisplayShare';

function Poster(props: { key: any; title: string; src: string; width: number; height: number }) {
	const { title, src, width, height } = props;
	return (
		<div key={title} className="poster rounded-lg px-2 py-3 bg-slate-200/50">
			<div className="title">
				<p>{title}</p>
				<DisplayShare title={title} src={src} width={width} height={height} />
			</div>
			<div className="w-full h-fit flex justify-center p-2 bg-white/50 rounded-lg">
				<DisplayImage src={src} width={width} height={height} />
			</div>
		</div>
	);
}

export default async function Display() {
	noStore();
	try {
		const data = await fetch(`/api/community`, { method: 'GET' }).then((res) => res.json());

		return (
			<>
				{/* <Poster key={1} title={''} src={''} width={0} height={0} />; */}
				{data.map((e: any, i: number) => {
					return <Poster key={i} title={e.title} src={e.src} width={e.width} height={e.height} />;
				})}
			</>
		);
	} catch {}
}
