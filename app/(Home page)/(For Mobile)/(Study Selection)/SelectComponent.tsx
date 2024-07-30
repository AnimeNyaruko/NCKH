'use client';
import Link from 'next/link';

export default function SelectComponent(props: any) {
	const { text, url } = props;
	return (
		<Link href={url} className="rounded-md h-full w-full flex items-center bg-slate-300">
			<p className="ml-5">{text}</p>
		</Link>
	);
}
