import clsx from 'clsx';

export default function InputFields({
	placeholder,
	className,
	...rest
}: {
	placeholder: string;
	className?: string;
}) {
	return (
		<form className="w-[85%]">
			<input
				{...rest}
				className={clsx(
					'bg-white rounded-[2rem] py-[1.15rem] w-full px-[1.5rem] placeholder-bold',
					className
				)}
				type="text"
				placeholder={placeholder}
			/>
		</form>
	);
}
