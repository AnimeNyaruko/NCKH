import clsx from 'clsx';
import Link from 'next/link';

export default function LoginButton({
	placeholder,
	className,
	url,
	...rest
}: {
	placeholder: string;
	className?: string;
	url: string;
}) {
	return (
		<Link
			{...rest}
			href={url}
			className={clsx(
				'w-max h-min flex items-center justify-center hover:drop-shadow-[0_0_0.25rem_rgba(0,0,0,0.25)] rounded-2xl bg-white',
				className
			)}>
			<p className="relative block w-max h-min py-[0.25rem] px-[2.5rem] m-[0.1rem] roboto font-bold text-center text-[#408AFF] text-[12.5px] border-solid border-[1px] rounded-2xl">
				{placeholder}
			</p>
		</Link>
	);
}
