import DisplayImage from './DisplayImage';
import DisplayShare from './DisplayShare';
import { unstable_noStore as noStore } from 'next/cache';

function CreatePost(props: { title: string; src: string; width: number; height: number }) {
	const { title, src, width, height } = props;

	return (
		<div className="grid grid-cols-1 grid-rows-[25px_1fr] bg-slate-200 rounded-md w-full">
			<div className="grid grid-cols-[85%_15%] grid-rows-[25px] items-center px-2 max-w-full">
				<p className="truncate font-bold text-sm">{title}</p>
				<DisplayShare title={title} src={src} width={width} height={height} />
			</div>
			<div className="py-3">
				<DisplayImage src={src} width={width} height={height} />
			</div>
		</div>
	);
}

export default async function DisplayPost() {
	noStore();

	try {
		const data = await fetch('/api/community', { method: 'GET' }).then((res) => res.json());

		return (
			<>
				<div id="left" className="flex flex-col gap-y-3 items-center h-fit">
					{/* <CreatePost key={1} title={''} src={''} width={0} height={0} />; */}
					{data.map(
						(e: any, i: number) =>
							i % 2 == 0 && (
								<CreatePost key={i} title={e.title} src={e.src} width={e.width} height={e.height} />
							)
					)}
				</div>
				<div id="right" className="flex flex-col gap-y-3 items-center h-fit">
					{data.map(
						(e: any, i: number) =>
							i % 2 != 0 && (
								<CreatePost key={i} title={e.title} src={e.src} width={e.width} height={e.height} />
							)
					)}
				</div>
			</>
		);
	} catch {}
}
