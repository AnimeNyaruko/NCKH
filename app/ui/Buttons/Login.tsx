import clsx from 'clsx';
import Link from 'next/link';

export default function LoginButton({
	placeholder,
	className,
	url,
	fontClass,
	...rest
}: {
	className?: string;
	fontClass?: string;
	placeholder: string;
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
			<p
				className={clsx(
					`relative block w-max h-min m-[0.1rem] roboto font-bold text-center text-[#408AFF] border-solid border-[1px] rounded-2xl`,
					fontClass
				)}>
				{placeholder}
			</p>
		</Link>
	);
}
